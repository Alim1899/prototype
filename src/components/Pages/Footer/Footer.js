import React from "react";
import classes from "./Footer.module.css";
import phone from "../../../assets/footer/phone.svg";
import mail from "../../../assets/footer/mail.svg";
import address from "../../../assets/footer/address.svg";
import logo from "../../../assets/footer/logo.svg";
import facebook from "../../../assets/footer/facebook.svg";
import instagram from "../../../assets/footer/instagram.svg";
import whatsapp from "../../../assets/icons/social/whatsapp.svg";
const Footer = () => {
  const openWhatsApp = () => {
    const url = `https://wa.me/+995593065588`;
    window.open(url, "_blank");
  };
  return (
    <footer className={classes.main}>
      <div className={classes.content}>
        {" "}
        <div className={classes.contact}>
          <div className={classes.numbers}>
            <h4 className={classes.address}>
              <img alt="address" src={address} className={classes.icon}></img>
              ა.წერეთლის ქუჩა N67. ქუთაისი 4600
            </h4>
            <div
              className={classes.phone}
              onClick={openWhatsApp}
              href="tel:(+995) 593 065 588"
            >
              <img className={classes.icon} alt="whatsapp" src={whatsapp}></img>
              <h4>(+995)593 065 588</h4>
            </div>
            <a className={classes.phone} href="tel:(+995) 431 230 367">
              <img className={classes.icon} alt="phone" src={phone}></img>
              <h4>(+995) 431 230 367</h4>
            </a>
          </div>
          <div className={classes.social}>
            <a className={classes.mail} href="mailto:ltd.nueva@gmail.com">
              <img className={classes.socialIcon} alt="mail" src={mail}></img>
            </a>
            <a
              className={classes.insta}
              href="https://www.instagram.com/nikoloz_kapn/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className={classes.socialIcon}
                alt="instagram"
                src={instagram}
              ></img>
            </a>
            <a
              className={classes.facebook}
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/nika.kapanadze.9085"
            >
              <img
                className={classes.socialIcon}
                alt="facebook"
                src={facebook}
              ></img>
            </a>
          </div>
        </div>
        <div className={classes.foot}>
          <img className={classes.logoIcon} alt="logo" src={logo}></img>
          <h4>All Rights Reserved</h4>
          <h4>{new Date().getFullYear()} • LTD Nueva</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
