import React, { useState, useEffect, useCallback } from "react";
import leftSlide from "../../../../assets/icons/leftslide.svg";
import rightSlide from "../../../../assets/icons/rightslide.svg";
import scr1 from "../../../../assets/photos/scr1.png";
import scr3 from "../../../../assets/photos/scr3.png";
import scr4 from "../../../../assets/photos/scr4.png";
import classes from "./Slider.module.css";

const slides = [scr1, scr4, scr3];

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slider = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setTimeout(slider, 3500);
    return () => clearTimeout(timer);
  }, [activeSlide, slider]);

  const changeByButtons = (direction) => {
    setActiveSlide(
      (prev) => (prev + direction + slides.length) % slides.length
    );
  };

  return (
    <div className={classes.main}>
      <div className={classes.slider}>
        <img
          alt="Previous slide"
          onClick={() => changeByButtons(-1)}
          className={classes.leftArrow}
          src={leftSlide}
        />
        <div className={classes.content}>
          <div className={classes.slides}>
            {slides.map((slide, index) => (
              <img
                key={index}
                className={`${classes.slide} ${
                  activeSlide === index ? "" : classes.none
                }`}
                src={slide}
                alt={`Slide ${index + 1}`}
              />
            ))}
          </div>
          <div>
            <ul className={classes.dots}>
              {slides.map((_, index) => (
                <li
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={
                    activeSlide === index ? classes.activeDot : classes.dot
                  }
                />
              ))}
            </ul>
          </div>
        </div>
        <img
          onClick={() => changeByButtons(1)}
          alt="Next slide"
          className={classes.rightArrow}
          src={rightSlide}
        />
      </div>
    </div>
  );
};

export default Slider;
