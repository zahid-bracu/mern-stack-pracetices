import React from "react";
import "./styles.css";

function App() {
  // css object
  const box = {
    width: "100px",
    height: "100px",
    backgroundColor: "red"
  };
  return (
    // css object is using inside the div
    <div style={box}>
      {/* inline css style */}
      <p style={{ color: "green", backgroundColor: "yellow" }}>cool</p>
    </div>
  );
}
export default App;
