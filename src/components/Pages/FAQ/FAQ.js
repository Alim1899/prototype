import classes from "./FAQ.module.css";
import up from "../../../assets/icons/services/up.svg";
import down from "../../../assets/icons/services/down.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();
  const [expandedViews, setExpandedViews] = useState([false, false, false, false,false]);

  const clickHandler = (index) => {
    setExpandedViews((prev) => {
      const newViews = [...prev];
      newViews[index] = !newViews[index];
      return newViews;
    });
  };

  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <div className={classes.faq}>
          <h1 className={classes.contentHeader}>{t("homePage.faq.header")}</h1>

          {[0, 1, 2, 3, 4].map((index) => (
            <div key={index} className={classes.question}>
              <div className={classes.quest} onClick={() => clickHandler(index)}>
                <h5>{t(`homePage.faq.questions.quest${index + 1}`)}</h5>
                <img
                  alt="carret"
                  className={classes.svg}
                  src={expandedViews[index] ? up : down}
                />
              </div>
              <div className={classes.answer} style={{ display: expandedViews[index] ? "block" : "none" }}>
                <h6>{t(`homePage.faq.questions.answer${index + 1}`)}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
