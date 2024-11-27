import { useState } from "react";
import { FaStar } from "react-icons/fa";
import style from "./star-rating.module.css";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex)
  }
  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex)
  }
  function handleMouseLeave() {
    setHover(rating)
  }

  return (
    <div className={style.main}>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (rating || hover) ? style.active : style.inactive}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}