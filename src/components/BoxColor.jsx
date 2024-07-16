import React from "react";

const BoxColor = ({ color, inputValue, isMatch }) => {
  const boxStyle = {
    backgroundColor: "",
    border: `5px solid ${color}`,
    display: "inline-block",
    width: "100px",
    height: "100px",
    margin: "10px",
    textAlign: "center",
    lineHeight: "100px",
    color: color,
  };

  if (isMatch) {
    boxStyle.backgroundColor = color;
  }

  return (
    <div style={boxStyle}>
      {isMatch ? `I am ${color}` : `I am not ${inputValue}`}
    </div>
  );
};

export default BoxColor;
