import React, { useEffect, useRef } from "react";
import "./CanvasShapesRotate.css";
import App from "./App.js";

function CanvasShapesRotate(props) {
  const canvasRef = useRef(null);

  useEffect(() => {
    new App(canvasRef);
  }, []);

  return (
    <div className="c-sr-container">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default CanvasShapesRotate;
