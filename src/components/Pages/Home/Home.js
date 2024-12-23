import { useState } from "react";
import classes from "./Home.module.css";
import Slider from "./Slider/Slider";
import ServiceList from "../Services/ServiceList";
import up from "../../../assets/home/up.svg";
import down from "../../../assets/home/right.svg";
import { useTranslation } from "react-i18next";
import services from "../../../assets/home/services.svg";

const Home = () => {
  const { t } = useTranslation();
  const [extendedIndex, setExtendedIndex] = useState(null);
  const [isServiceListVisible, setIsServiceListVisible] = useState(false);
  const data = ServiceList();

  const extend = (index) => {
    setExtendedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const toggleServiceListVisibility = () => {
    setIsServiceListVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <div className={classes.services}>
          <h2 className={classes.header}>
            <div className={classes.iconWrapper}>
              <img
                className={classes.icon}
                alt="Services icon"
                src={services}
                onClick={toggleServiceListVisibility}
              />
            </div>
            <span className={classes.text}>{t("homePage.offers")}</span>
          </h2>
          <div
            className={
              isServiceListVisible
                ? classes.serviceList
                : `${classes.serviceList} ${classes.serviceListHidden}`
            }
          >
            {data.map((el, index) => {
              const isExtended = index === extendedIndex;
              return (
                <div className={classes.service} key={index}>
                  <div
                    className={classes.collapsed}
                    onClick={() => extend(index)}
                  >
                    <h3 className={classes.serviceHeader}>{el[0].header}</h3>
                    <button className={classes.downArrow} type="button">
                      <img
                        className={classes.down}
                        alt={isExtended ? "Collapse" : "Expand"}
                        src={isExtended ? up : down}
                      />
                    </button>
                  </div>
                  {isExtended && (
                    <div className={classes.extend}>
                      {el[1].subHeaders.map((item, subIndex) => (
                        <div
                          className={classes.listItem}
                          key={subIndex}
                          onClick={() => extend(index)}
                        >
                          <span>{item.subhead}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.slider}>
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Home;
