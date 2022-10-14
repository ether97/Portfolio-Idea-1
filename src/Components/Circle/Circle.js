import React from "react";
import "./Circle.css";

const Circle = (props) => {
  const roundToHundredth = (value) => {
    return Number(value.toFixed(2));
  };

  const newValue = roundToHundredth(props.matrix.opacity);
  console.log(newValue);
  return (
    <div
      className="circle"
      style={{
        top: props.matrix.top,
        left: props.matrix.left,
        "--opacity": props.matrix.opacity,
        "--timer": `${newValue}s`,
        // animationDelay:
      }}
    ></div>
  );
};

export default Circle;
