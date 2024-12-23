import classes from "./Contact.module.css";
import facebook from "../../../assets/icons/social/facebook.svg";
import instagram from "../../../assets/icons/social/instagram.svg";
import phone from "../../../assets/icons/social/phone.svg";
import whatsapp from "../../../assets/icons/social/whatsapp.svg";
import gmail from "../../../assets/icons/social/gmail.svg";
import Leaflet from "../../Map/Leaflet";
import marker from "../../../assets/icons/marker.png";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();
  const openWhatsApp = () => {
    const url = `https://wa.me/+995595270606`;
    window.open(url, "_blank");
  };
  return (
    <div className={classes.main}>
      <h2 className={classes.header}>{t("contactPage.header")}</h2>
      <div className={classes.contact}>
        <div className={classes.content}>
          <div className={classes.social}>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <a
                  target="blank"
                  href="https://www.facebook.com/nika.kapanadze.9085"
                >
                  <img
                    className={classes.socialIcon}
                    src={facebook}
                    alt="facebook"
                  ></img>
                  <h4>Facebook.com</h4>
                </a>
              </li>
              <li className={classes.listItem}>
                <a
                  href="https://www.instagram.com/nikoloz_kapn/"
                  target="blank"
                >
                  <img
                    className={classes.socialIcon}
                    src={instagram}
                    alt="instagram"
                  ></img>
                  <h4>Instagram.com</h4>
                </a>
              </li>
              <li className={classes.listItem}>
                <a href="mailto:ltd.nueva@gmail.com" target="blank">
                  <img
                    className={classes.socialIcon}
                    src={gmail}
                    alt="gmail"
                  ></img>
                  <h4>ltd.nueva@gmail.com</h4>
                </a>
              </li>
              <li className={classes.listItem} onClick={openWhatsApp}>
                <img
                  className={classes.socialIcon}
                  src={whatsapp}
                  alt="phone"
                />
                <h4>(+995) 595 270 606</h4>
              </li>
              <li className={classes.listItem}>
                <a href="tel:+995431230367," target="blank">
                  <img
                    className={classes.socialIcon}
                    src={phone}
                    alt="phone"
                  ></img>
                  <h4>(+995) 431 230 367</h4>
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.address}>
            <div className={classes.addressName}>
              {" "}
              <h4 className={classes.head}>{t("contactPage.addressHeader")}</h4>
              <h4 className={classes.street}>{t("contactPage.street")}</h4>
            </div>

            <div className={classes.map}>
              {" "}
              <Leaflet
                popup="ოფისი"
                center={[42.26423835098129, 42.70606967293128]}
                zoom={15}
                icon={marker}
                marker={[42.26423835098129, 42.70606967293128]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
