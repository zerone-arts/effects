import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./home-web.css";
let list = [
  { icon: "P1", name: "Portfolio1" },
  { icon: "FS", name: "FullScreen" },
  { icon: "NL", name: "NeonLogin" },
  { icon: "BT", name: "BlueTheme" },
];
function HomeWeb({ titleHandle, scrollChannelHandle }) {
  const [title, setTitle] = useState("");
  const webRef = useRef(null);

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
    if (webRef.current?.getBoundingClientRect().top <= 240) {
      scrollChannelHandle("web");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  return (
    <div className="home-web-container" ref={webRef}>
      <div className="home-web">
        <ul>
          {list.map((item, idx) => {
            return item.icon !== "" ? (
              <li
                key={idx}
                onMouseOver={(e) => OverHandle(e, item)}
                onMouseLeave={OutHandle}
              >
                <Link to={`/web/${item.name.toLowerCase()}`}>{item.icon}</Link>
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

export default HomeWeb;
