import React from "react";
import classes from "./About.module.css";
import { useTranslation } from "react-i18next";
import kutaisi from '../../../assets/photos/about/2.jpg'
import drone from '../../../assets/photos/about/1.jpeg'
import learn from '../../../assets/photos/about/3.jpeg'
import airport from '../../../assets/photos/about/4.jpeg'


const About = () => {
  const {t} = useTranslation()
  return (
    <div className={classes.main}>
  <h1 className={classes.header}>{t('aboutPage.header')}</h1>
      <div className={classes.content}>
        <div className={classes.section}>
          <img src={airport} className={classes.img} alt="img"></img>
          <div className={classes.description}>
            <p className={classes.text}>{t('aboutPage.firstParagraph')}</p>
          </div>
        </div>
        <div className={classes.section}>
        <img src={kutaisi} className={classes.img} alt="img"></img>
          <div className={classes.description}>
            <p className={classes.text}>{t('aboutPage.secondParagraph')}</p>
          </div>
        </div>
        <div className={classes.section}>
          <img src={learn} className={classes.img} alt="img"></img>
          <div className={classes.description}>
            <p className={classes.text}>{t('aboutPage.thirdParagraph')}</p>
          </div>
        </div>
        <div className={classes.section}>
          <img src={drone} className={classes.img} alt="img"></img>
          <div className={classes.description}>
            <p className={classes.text}>{t('aboutPage.fourthParagraph')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
