import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./home-canvas.css";
let list = [
  { icon: "CG", name: "CanvasGradient" },
  { icon: "CSR", name: "CanvasShapesRotate" },
];

function HomeCanvas({ titleHandle }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    titleHandle(title);
  }, [title]);

  const OverHandle = (e, item) => {
    setTitle(item.name);
  };
  const OutHandle = () => {
    setTitle("");
  };
  return (
    <div className="home-canvas">
      <ul>
        {list.map((item, idx) => {
          return item.icon !== "" ? (
            <li
              key={idx}
              onMouseOver={(e) => OverHandle(e, item)}
              onMouseLeave={OutHandle}
            >
              <Link to={`/canvas/${item.name.toLowerCase()}`}>{item.icon}</Link>
            </li>
          ) : (
            <div key={idx} style={{ display: "none" }}></div>
          );
        })}
      </ul>
    </div>
  );
}

export default HomeCanvas;
