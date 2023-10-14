import React from "react";
import ColorPicker from "./ColorPicker"; // Import the ColorPicker component

function App() {
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "gray",
    "black",
    "white",
    "cyan",
    "magenta",
    "lime",
    "indigo",
    "teal",
    "violet",
    "olive",
    "maroon",
    "navy",
    "silver",
    "gold",
    "turquoise",
    "aquamarine",
    "coral",
    "lavender",
    "orchid",
    "sienna",
    "tan",
    "wheat",
    "khaki",
  ];

  return (
    <div className="App">
      <ColorPicker colors={colors} /> {/* Pass the array of colors as a prop */}
    </div>
  );
}

export default App;
