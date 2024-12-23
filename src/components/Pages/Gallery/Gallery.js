import { useState, useEffect } from "react";
import classes from "./Gallery.module.css";
import img1 from "../../../assets/photos/gallery/1.jpg";
import img2 from "../../../assets/photos/gallery/2.jpg";
import img3 from "../../../assets/photos/gallery/3.jpg";
import img4 from "../../../assets/photos/gallery/4.jpg";
import img5 from "../../../assets/photos/gallery/5.jpg";
import img6 from "../../../assets/photos/gallery/6.jpg";
import img7 from "../../../assets/photos/gallery/7.jpg";
import img8 from "../../../assets/photos/gallery/8.jpg";
import img9 from "../../../assets/photos/gallery/9.jpg";
import img10 from "../../../assets/photos/gallery/10.jpg";
import img11 from "../../../assets/photos/gallery/11.jpg";
import img12 from "../../../assets/photos/gallery/12.jpg";
import right from '../../../assets/icons/rightslide.svg';
import left from '../../../assets/icons/leftslide.svg';
import enlarge from '../../../assets/icons/larger.png';
import x from '../../../assets/icons/x.svg'
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const { t } = useTranslation();
  const [slider, showSlider] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

  const leftSlide = () => {
    setActiveSlide((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const rightSlide = () => {
    setActiveSlide((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openSlider = (index) => {
    setActiveSlide(index);
    showSlider(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setTimeout(() => {
        showSlider(false);
      }, 300);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={classes.main}>
      <h2 className={classes.header}>{t("galleryPage.header")}</h2>
      <div className={classes.photos}>
        {images.map((image, index) => (
          <div key={index} className={classes.imgContainer}>
  <div className={classes.enlarge} onClick={() => openSlider(index)}>
    <img
      src={enlarge}
      alt="enlarge"
      className={classes.iconL}
    />
  </div>
  <img alt="img" className={classes.img} src={image} />
</div>

        ))}
      </div>

      {slider && (
        <div className={classes.slider}>
          <div className={classes.arrows} onClick={leftSlide}>
            <img
              alt="left"
              src={left}
              className={`${classes.arrow} ${classes.leftArrow}`}
            />
          </div>
          <div className={classes.slides}>
          <div className={classes.slides}>
           
            <img alt="slide" className={classes.activeSlide} src={images[activeSlide]} />
            <img alt='close' className={classes.close} onClick={()=>showSlider(false)} src={x}></img>
            
          </div>
          </div>
          <div className={classes.arrows} onClick={rightSlide}>
            <img
              alt="right"
              src={right}
              className={`${classes.arrow} ${classes.rightArrow}`}
            />
          </div>
        </div>
      )}
      
      
      
      
       
    </div>
  );
};

export default Gallery;
