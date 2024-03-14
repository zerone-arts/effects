import React, { useEffect, useRef } from "react";
import "./CanvasGradient.css";
import App from "./App.js";

function CanvasGradient(props) {
  const canvasRef = useRef(null);

  let totalPartices = 15;

  useEffect(() => {
    new App(canvasRef, totalPartices);
  }, []);

  return (
    <div className="c-g-container">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default CanvasGradient;
