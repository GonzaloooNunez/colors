import React, { useState } from "react";
import BoxColor from "./BoxColor";

const colors = [
  "red",
  "green",
  "pink",
  "yellow",
  "purple",
  "white",
  "blue",
  "aqua",
  "olive",
];

const MyFormChallenge = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type a color"
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {colors.map((color) => (
          <BoxColor
            key={color}
            color={color}
            inputValue={inputValue}
            isMatch={inputValue === color}
          />
        ))}
      </div>
    </div>
  );
};

export default MyFormChallenge;
