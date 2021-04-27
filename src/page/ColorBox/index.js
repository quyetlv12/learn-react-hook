import React, { useState } from "react";
import "./style.scss";
const ColorBox = () => {
  const [color, setcolor] = useState(() => {
    const colorinit = localStorage.getItem("box-color") || "yellow";
    return colorinit;
  });
  const getRandomColor = () => {
    const colorRandom = ["green", "yellow", "blue", "black", "red"];
    const randomColor = Math.trunc(Math.random() * 5);
    return colorRandom[randomColor];
  };
  const handelChangeColor = () => {
    const newColor = getRandomColor();
    setcolor(newColor);
    localStorage.setItem("box-color", newColor);
  };
  return (
    <div className="container mx-auto px-4">
      <div
        className="box-color"
        style={{ backgroundColor: color }}
        onClick={handelChangeColor}
      ></div>
    </div>
  );
};

export default ColorBox;
