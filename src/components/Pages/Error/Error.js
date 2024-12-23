import classes from "./Error.module.css";
import { useTranslation } from "react-i18next";
const Error = () => {
  const {t} = useTranslation();
  return (
    <div className={classes.main}>
      <div className={classes.content}>
      <div className={classes.errors}>
      <h1>{t("error.text")}</h1>
        <button className={classes.button} type="button">
         <a href="/">{t("error.return")}</a> 
        </button>
      </div>

      </div>
    </div>
  );
};

export default Error;
