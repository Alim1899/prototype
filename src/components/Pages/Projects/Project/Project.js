import React, { useState, useEffect } from "react";
import classes from "./Project.module.css";
import Leaflet from "../../../Map/Leaflet";
import { useParams } from "react-router-dom";
import { getDatabase,ref,get } from "firebase/database";
import enlarge from "../../../../assets/icons/larger.png";
import marker from "../../../../assets/icons/marker.png";
import left from "../../../../assets/icons/leftslide.svg";
import right from "../../../../assets/icons/rightslide.svg";
import { useTranslation } from "react-i18next";
const Project = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [project, setProject] = useState(undefined);
  const [slider, showSlider] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const lang = sessionStorage.getItem("lng");
console.log(id);
  useEffect(()=>{
    const retrieveData = async () => {
      const db = getDatabase();
      const projectsRef = ref(db, `projects/${id}`);
      try {
        const snapshot = await get(projectsRef);
        if (snapshot.exists()) {
         console.log(snapshot.val());
         setProject(snapshot.val())
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    };
    retrieveData()
  },[id])
  

  if (!project) {
    return (
      <div className={classes.mainAnim}>
        <div className={classes.animation}>
          <h2>{t("projectsPage.loading")}</h2>
          <div className={classes.loader}></div>
        </div>
      </div>
    );
  }

  const leftSlide = () => {
    setActiveSlide((prevIndex) =>
      prevIndex === 0 ? Object.keys(project.images).length - 1 : prevIndex - 1
    );
  };

  const rightSlide = () => {
    setActiveSlide((prevIndex) =>
      prevIndex === Object.keys(project.images).length - 1 ? 0 : prevIndex + 1
    );
  };

  const openSlider = (index) => {
    setActiveSlide(index);
    showSlider(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setTimeout(() => {
        showSlider(false);
      }, 300);
    }
  };
  window.addEventListener("keydown", handleKeyDown);

  return (
    <div className={classes.project}>
      <div className={classes.content}>
        <header className={classes.header}>
          {lang === "en" ? project.header.en : project.header.ge}
        </header>
        <p className={classes.description}>
          {lang === "en" ? project.description.en : project.description.ge}
        </p>
        <h4 className={classes.date}>
          {lang === "en"
            ? project.date.month.en
            : project.date.month.ge}, {project.date.year}{" "}
        </h4>
        <div className={classes.map}>
          <Leaflet
            popup={lang==='en'?project.location.en:project.location.ge}
            center={project.coords.split(",")}
            zoom={10}
            icon={marker}
            marker={project.coords.split(",")}
          />
        </div>
        <div className={classes.gallery}>
          <h1 className={classes.sliderHeader}>
            {t("projectsPage.project.galleryHeader")}
          </h1>
          <div className={classes.photos}>
            {Object.keys(project.images).map((key, index) => (
              <div key={key} className={classes.imgs}>
                <img
                  className={classes.img}
                  alt="project-img"
                  src={project.images[key].url}
                ></img>
                <div className={classes.enlarge}>
                  <img
                    src={enlarge}
                    alt="enlarge"
                    onClick={() => openSlider(index)}
                  ></img>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {slider && (
        <div className={classes.slider}>
          <div className={classes.arrows} onClick={leftSlide}>
            <img
              alt="left"
              src={left}
              className={`${classes.arrow} ${classes.leftArrow}`}
            />
          </div>
          <div className={classes.slides}>
            {Object.keys(project.images).map((key, index) => (
              <img
                key={key}
                className={classes.contentImg}
                alt={project.images[key].key}
                src={project.images[key].url}
                onClick={() => showSlider(false)}
                style={{
                  transform: `translateX(-${activeSlide * 100}%)`,
                }}
              />
            ))}
          </div>
          <div className={classes.arrows} onClick={rightSlide}>
            <img
              alt="right"
              src={right}
              className={`${classes.arrow} ${classes.rightArrow}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
