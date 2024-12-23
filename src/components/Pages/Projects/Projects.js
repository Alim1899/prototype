import React, { useState,useReducer, useEffect } from "react";
import classes from "./Projects.module.css";
import locate from "../../../assets/icons/location.svg";
import left from "../../../assets/icons/leftslide.svg";
import right from "../../../assets/icons/rightslide.svg";
import { useTranslation } from "react-i18next";
import {getProject, getIds } from "../../Functions/Functions";


const Project = ({ project, id }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { t } = useTranslation();

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
            onClick={() => leftSlide(Object.entries(project.images).length)}
            src={left}
            className={`${classes.arrow} ${classes.leftArrow}`}
          />
          <div className={classes.slides}>
            {Object.entries(project.images).map((image, index) => (
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
            onClick={() => rightSlide(Object.entries(project.images).length)}
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



const initialState = {
  data: [],
  projectsLoaded: false,
  ids: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "getIds":
      return { ...state, ids: action.payload };
    case "addProject":
      return { ...state, data: [...state.data, action.payload] };
    case "loaded":
      return { ...state, projectsLoaded: action.payload };
    default:
      return state;
  }
};
const Projects = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {ids,projectsLoaded,data} = state;
  const { t } = useTranslation();

  useEffect(() => {
  getIds(dispatch);
  }, []);

useEffect(()=>{
  console.log(data);
  if(ids.length>0&&!projectsLoaded){
    getProject(ids,dispatch)
    dispatch({type:"loaded",payload:true})
  }
},[ids,projectsLoaded])
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
          {data.map((project) => {
            return <Project project={project} key={project.id} />;
          })}
        </div>
      )}
    </div>
  );
};



export default Projects;
