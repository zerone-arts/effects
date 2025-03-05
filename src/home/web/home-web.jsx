import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./home-web.css";
let list = [
  { icon: "Q&A", name: "QnA", url: "https://qna-zerone.vercel.app" },
  { icon: "FS", name: "FullScreen", url: "/fullscreen" },
  { icon: "BT", name: "BlueTheme", url: "/bluetheme" },
  { icon: "MPF1", name: "MiniPortfolio1", url: "/miniportfolio1" },
  { icon: "MPF2", name: "MiniPortfolio2", url: "/miniportfolio2" },
  { icon: "JP", name: "Japan", url: "japan" },
  { icon: "WC", name: "WebCube", url: "webcube" },
  { icon: "OD", name: "OutDoor", url: "outdoor" },
  { icon: "B", name: "Brand", url: "brand" },
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
                {item.url.startsWith("http") ? (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.icon}
                  </a>
                ) : (
                  <Link key={item.name} to={`/web${item.url}`} target="_blank">
                    {item.icon}
                  </Link>
                )}
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
