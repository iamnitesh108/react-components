import React, { useState } from "react";
import styles from "./image-slider.module.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  return (
    <div className={styles.container}>
    <div className={styles.carousel}>
      <BsArrowLeftCircleFill
        className={`${styles.arrow} ${styles["arrow-left"]}`}
        onClick={prevSlide}
      />
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={
              slide === idx
                ? `${styles.slide}`
                : `${styles.slide} ${styles["slide-hidden"]}`
            }
          />
        );
      })}
      <BsArrowRightCircleFill
        className={`${styles.arrow} ${styles["arrow-right"]}`}
        onClick={nextSlide}
      />
      <span className={styles.indicators}>
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={()=>setSlide(idx)}
              className={
                slide === idx
                  ? `${styles.indicator}`
                  : `${styles.indicator} ${styles["indicator-inactive"]}`
              }
            />
          );
        })}
      </span>
    </div>
    </div>
  );
};

export default Carousel;
