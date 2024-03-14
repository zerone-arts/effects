import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./home-slide.css";
let list = [
  { icon: "SL1", name: "Slide1" },
  { icon: "SS3", name: "SlideShow3d" },
  { icon: "", name: "" },
  { icon: "", name: "" },
  { icon: "", name: "" },
];
function HomeSlide({ titleHandle }) {
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
    <div className="home-slide">
      <ul>
        {list.map((item, idx) => {
          return item.icon !== "" ? (
            <li
              key={idx}
              onMouseOver={(e) => OverHandle(e, item)}
              onMouseLeave={OutHandle}
            >
              <Link to={`/slide/${item.name.toLowerCase()}`}>{item.icon}</Link>
            </li>
          ) : (
            <div key={idx} style={{ display: "none" }}></div>
          );
        })}
      </ul>
    </div>
  );
}

export default HomeSlide;
