import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./home-canvas.css";
let list = [
  { icon: "CG", name: "CanvasGradient" },
  { icon: "CSR", name: "CanvasShapesRotate" },
];

function HomeCanvas({ titleHandle, scrollChannelHandle }) {
  const [title, setTitle] = useState("");
  const canvasRef = useRef(null);

  useEffect(() => {
    titleHandle(title);
  }, [title]);

  const OverHandle = (e, item) => {
    setTitle(item.name);
  };
  const OutHandle = () => {
    setTitle("");
  };

  const handleScroll = () => {
    if (canvasRef.current?.getBoundingClientRect().top <= 240) {
      scrollChannelHandle("canvas");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);
  return (
    <div className="home-canvas-container" ref={canvasRef}>
      <div className="home-canvas">
        <ul>
          {list.map((item, idx) => {
            return item.icon !== "" ? (
              <li
                key={idx}
                onMouseOver={(e) => OverHandle(e, item)}
                onMouseLeave={OutHandle}
              >
                <Link to={`/canvas/${item.name.toLowerCase()}`}>
                  {item.icon}
                </Link>
              </li>
            ) : (
              <div key={idx} style={{ display: "none" }}></div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default HomeCanvas;
