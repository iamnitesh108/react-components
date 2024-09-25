import React, { useEffect, useState } from "react";
import styles from "./random-color.module.css";
console.log(`${styles.btn} ${styles['btn-hipster']}`)
// className={`${styles.btn} ${styles['btn-hipster']}`}
const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#573800");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleChangeHexColor() {
    const hex=[1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor="#"

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

 
  function handleChangeRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g}, ${b})`);
  }
  useEffect(() => {
    if (typeOfColor === "rgb") handleChangeRgbColor();
    else handleChangeHexColor();
  }, [typeOfColor]);

  return (
    <main style={{ backgroundColor: color}} className={`${styles.container}`}>
      <div className={styles["btn-container"]} >
        <button className={`${styles.btn} ${typeOfColor==="hex" && styles["btn--focus"]}`} onClick={()=>setTypeOfColor("hex")}>Create HEX Color</button>
        <button className={`${styles.btn} ${typeOfColor==="rgb" && styles["btn--focus"]}`} onClick={()=>setTypeOfColor("rgb")}>Create RGB Color</button>
        <button className={styles.btn} onClick={typeOfColor=="hex" ? handleChangeHexColor: handleChangeRgbColor}>Generate Random Color</button>
      </div>
      <div className={styles["color-type"]}>
        <h1 className={styles.title }>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h1>
        <h2>{color}</h2>
      </div>
    </main>
  );
};

export default RandomColor;
