import React, { useState } from "react";
import classes from "./Projects.module.css";
import locate from "../../../assets/icons/location.svg";
import left from "../../../assets/icons/leftslide.svg";
import right from "../../../assets/icons/rightslide.svg";
import { useTranslation } from "react-i18next";
import { useProjects } from "./Context/ProjectsContext";
const Project = ({ project, id }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { t } = useTranslation();
  const photos = Object.entries(project.images);
  const leftSlide = (length) => {
    setActiveSlide((prevIndex) =>
      prevIndex === 0 ? length - 1 : prevIndex - 1
    );
  };

  const rightSlide = (length) => {
    setActiveSlide((prevIndex) =>
      prevIndex === length - 1 ? 0 : prevIndex + 1
    );
  };
  const lang = sessionStorage.getItem("lng");
  return (
    <div className={classes.project}>
      <div className={classes.content}>
        <div className={classes.slider}>
          <img
            alt="left"
            onClick={() => leftSlide(photos.length)}
            src={left}
            className={`${classes.arrow} ${classes.leftArrow}`}
          />
          <div className={classes.slides}>
            {photos.map((image, index) => (
              <img
                key={index}
                className={classes.contentImg}
                alt={image[1].key}
                src={image[1].url}
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              />
            ))}
          </div>
          <img
            alt="right"
            src={right}
            onClick={() => rightSlide(photos.length)}
            className={`${classes.arrow} ${classes.rightArrow}`}
          />
        </div>
        <h3 className={classes.projectHeader}>
          {lang === "en" ? project.header.en : project.header.ge}
        </h3>
        <div className={classes.location}>
          <img alt="icon" className={classes.icon} src={locate} />
          <h5>{lang === "en" ? project.location.en : project.location.ge}</h5>
        </div>

        <a href={`/project/${id}`} className={classes.toProject}>
          <button type="button" className={classes.moreBtn}>
            {t("projectsPage.moreBtn")}
          </button>
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  const { data, projectsLoaded } = useProjects();
  const uniqueProjects = data.filter((value, index, self) => {
    return index === self.findIndex((t) => t.id === value.id);
  });
  return (
    <div className={classes.main}>
      <h1 className={classes.header}>{t("projectsPage.header")}</h1>

      {!projectsLoaded && (
        <div className={classes.mainAnim}>
          <div className={classes.animation}>
            <h2>{t("projectsPage.loading")}</h2>
            <div className={classes.loader}></div>
          </div>
        </div>
      )}

      {projectsLoaded && (
        <div className={classes.projectList}>
          {uniqueProjects.map((project) => {
            return (
              <Project
                project={project.value}
                id={project.id}
                key={project.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Projects;
