import React, { useState } from "react";
import "./ColorPicker.css";
function ColorPicker({ colors }) {
  const [isColorListVisible, setIsColorListVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleColorList = () => {
    setIsColorListVisible(!isColorListVisible);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsColorListVisible(false);
  };

  return (
    <div className="color-picker">
      <button onClick={toggleColorList}>Pick a color</button>
      {isColorListVisible && (
        <ul className="color-list">
          {colors.map((color, index) => (
            <li
              key={index}
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            >
              {color}
            </li>
          ))}
        </ul>
      )}
      {selectedColor && <p>Selected Color: {selectedColor}</p>}
    </div>
  );
}

export default ColorPicker;
