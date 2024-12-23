import React, { useState } from "react";
import down from "../../../assets/icons/services/down.svg";
import up from "../../../assets/icons/services/up.svg";
import ServiceList from "./ServiceList";
import classes from "./Services.module.css";
import { useTranslation } from "react-i18next";
const Services = () => {
  const { t } = useTranslation();
  const [showExtended, setShowExtended] = useState([]);
  const [showArrow, setShowArrow] = useState([]);
  const data = ServiceList();

  const extend = (index) => {
    const newShowExtended = [...showExtended];
    newShowExtended[index] = !newShowExtended[index];
    setShowExtended(newShowExtended);
    const newChangeArrow = [...showArrow];
    newChangeArrow[index] = !newChangeArrow[index];
    setShowArrow(newChangeArrow);
    console.log(showArrow);
  };

  return (
    <div className={classes.main}>
      <div className={classes.services}>
        <h2 className={classes.header}>{t("headers.services")}</h2>
        <div className={classes.serviceList}>
          {data.map((el, index) => {
            return (
              <div className={classes.service} key={index}>
                <div onClick={() => extend(index)} className={classes.collapsed}>
                  <h3  className={classes.serviceHeader}>{el[0].header}</h3>
                  <button
                    className={classes.downArrow}
                 
                    type="button"
                  >
                    <img
                      className={classes.down}
                      alt="down"
                      src={showArrow[index] ? up : down}
                    />
                  </button>
                </div>
                {/*  */}
                {showExtended[index] && (
                  <div className={classes.extend}>
                    <ul>
                      {el[1].subHeaders.map((item, subIndex) => {
                        return (
                          <li className={classes.listItem}  onClick={() => extend(index)} key={subIndex}>
                            {item.subhead}
                          </li>
                        );
                      })}
                    </ul>
                    <button
                      className={classes.upArrow}
                      onClick={() => extend(index)}
                    >
                      <img className={classes.up} src={up} alt="up" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
