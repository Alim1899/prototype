import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import classes from "./Navbar.module.css";
import logo from "../../assets/photos/logo.svg";
import phone from "../../assets/navbar/phone.svg";
import location from "../../assets/navbar/location.svg";
import globe from "../../assets/navbar/globe.svg";
import whiteglobe from "../../assets/navbar/whiteglobe.svg";

const Navbar = (props) => {
  const { t } = useTranslation();
  const initialLanguage = sessionStorage.getItem("lng") || "ge";
  const [showNavbar, setShowNavbar] = useState(false);
  const [englishLang, setEnglishLang] = useState(initialLanguage === "en");
  const [dropDown, setDropDown] = useState(window.innerWidth <= 725);

  useEffect(() => {
    const handleResize = () => {
      setDropDown(window.innerWidth <= 725);
      setShowNavbar(false);
    };

    const debouncedHandleResize = debounce(handleResize, 100);
    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(this, arguments), delay);
    };
  };

  const showList = () => {
    setShowNavbar(!showNavbar);
  };

  const changeLanguage = () => {
    const newLang = englishLang ? "ge" : "en";
    setEnglishLang(!englishLang);
    i18n.changeLanguage(newLang);
    sessionStorage.setItem("lng", newLang);
  };

  return (
    <div className={classes.main}>
      {!dropDown && (
        <div className={classes.navbar}>
          {" "}
          <ul className={classes.contactList}>
            <li className={classes.phone}>
              <img className={classes.icon} src={phone} alt="phone"></img>
              <h4 className={classes.number}>
                <a className={classes.nomberRef} href="tel:+995595270606">
                595 270 606
                </a>
              </h4>
            </li>
            <li className={classes.location}>
              <img className={classes.icon} src={location} alt="location"></img>
              <h4 className={classes.address}>{t("headers.address")}</h4>
            </li>
            <li
              onClick={changeLanguage}
              className={showNavbar ? classes.langs : classes.languages}
            >
              <img src={globe} className={classes.icon} alt="globe"></img>
              <h5 className={classes.language}>{englishLang ? "ქა" : "EN"}</h5>
            </li>
          </ul>
          <ul className={classes.navlinks}>
            {["about", "services", "projects", "FAQ", "gallery", "contact"].map(
              (path) => (
                <li
                  key={path}
                  className={
                    window.location.pathname === `/${path}`
                      ? classes.activeItem
                      : classes.listItem
                  }
                >
                  <a href={`/${path}`}>
                    <h4>{t(`headers.${path}`)}</h4>
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
      {dropDown && (
        <div className={classes.drop}>
          {" "}
          <ul className={classes.contactList}>
            <li className={classes.phone}>
              <img className={classes.icon} src={phone} alt="phone"></img>
              <h4 className={classes.number}>
                <a className={classes.nomberRef} href="tel:+995595270606">
                595 270 606
                </a>
              </h4>
            </li>
            <li className={classes.location}>
              <img className={classes.icon} src={location} alt="location"></img>
              <h4 className={classes.address}>{t("headers.address")}</h4>
            </li>
            <li
              onClick={changeLanguage}
              className={showNavbar ? classes.langs : classes.languages}
            >
              <img src={globe} className={classes.icon} alt="globe"></img>
              <h5 className={classes.language}>{englishLang ? "ქა" : "EN"}</h5>
            </li>
          </ul>
          <div className={classes.dropDown}>
            <a href="/">
              {" "}
              <img className={classes.logo} alt="logo" src={logo}></img>
            </a>
            <div className={classes.lines} onClick={showList}>
              <div className={!showNavbar ? classes.line : classes.close}></div>
              <div className={!showNavbar ? classes.line : classes.close}></div>
              <div className={!showNavbar ? classes.line : classes.close}></div>
            </div>
            <ul className={showNavbar ? classes.dropMenu : classes.navlinks}>
              {[
                "about",
                "services",
                "projects",
                "FAQ",
                "gallery",
                "contact",
              ].map((path) => (
                <li
                  key={path}
                  className={
                    window.location.pathname === `/${path}`
                      ? classes.activeItem
                      : classes.listItem
                  }
                >
                  <a href={`/${path}`}>
                    <h4>{t(`headers.${path}`)}</h4>
                  </a>
                </li>
              ))}
              <li onClick={changeLanguage} className={classes.languages}>
                <img
                  src={whiteglobe}
                  className={classes.globeIcon}
                  alt="globe"
                ></img>
                <h5 className={classes.language}>
                  {englishLang ? "ქა" : "EN"}
                </h5>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className={classes.logoRow}>
        <a href="/">
          <img src={logo} className={classes.logo} alt="logo"></img>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
