import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./home-slide.css";
let list = [
  { icon: "SL1", name: "Slide1" },
  { icon: "SS3", name: "SlideShow3d" },
  { icon: "SR3", name: "SlideRotation3d " },
  { icon: "PS3", name: "PhotoSlide3d" },
  { icon: "", name: "" },
];
function HomeSlide({ titleHandle, scrollChannelHandle }) {
  const [title, setTitle] = useState("");
  const slideRef = useRef(null);

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
    if (slideRef.current?.getBoundingClientRect().top <= 240) {
      scrollChannelHandle("slide");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  return (
    <div className="home-slide-container" ref={slideRef}>
      <div className="home-slide">
        <ul>
          {list.map((item, idx) => {
            return item.icon !== "" ? (
              <li
                key={idx}
                onMouseOver={(e) => OverHandle(e, item)}
                onMouseLeave={OutHandle}
              >
                <Link to={`/slide/${item.name.toLowerCase()}`}>
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

export default HomeSlide;
