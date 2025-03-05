import React, { useState, useEffect, useRef } from "react";
import "./home.css";
import HomeCss from "./css/home-css";
import HomeWeb from "./web/home-web";

import HomeSlide from "./slide/home-slide";

function Home({ left, top }) {
  const [channel, setChannel] = useState("web");
  const [title, setTitle] = useState("");

  const [active, setActive] = useState("");

  const scrollChannelHandle = (e) => {
    setChannel(e);
  };

  const titleHandle = (e) => {
    setTitle(e);
  };

  const listHoverHandle = () => {
    setActive("active");
  };
  const listOutHandle = () => {
    setActive("");
  };

  useEffect(() => {
    title === "" ? setActive("") : setActive("active");
  }, [title]);

  useEffect(() => {}, [channel]);

  return (
    <div className="home-container" id="container">
      <div className="home-select" id="web">
        <HomeWeb
          titleHandle={(e) => titleHandle(e)}
          scrollChannelHandle={scrollChannelHandle}
        />
        {channel === "web" ? (
          <div className="home-titleBx" style={{ left: left, top: top }}>
            {title}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="home-select" id="css">
        <HomeCss
          titleHandle={(e) => titleHandle(e)}
          scrollChannelHandle={scrollChannelHandle}
        />
        {channel === "css" ? (
          <div className="home-titleBx" style={{ left: left, top: top }}>
            {title}
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <div className="home-select" id="slide">
        <HomeSlide
          titleHandle={(e) => titleHandle(e)}
          scrollChannelHandle={scrollChannelHandle}
        />
        {channel === "slide" ? (
          <div className="home-titleBx" style={{ left: left, top: top }}>
            {title}
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <div className={`home-nav ${channel}`}>
        <ul>
          <li
            onClick={() => {
              setChannel("web");
            }}
            onMouseOver={listHoverHandle}
            onMouseLeave={listOutHandle}
          >
            <a href="#web">web</a>
          </li>
          <li
            onClick={() => {
              setChannel("css");
            }}
            onMouseOver={listHoverHandle}
            onMouseLeave={listOutHandle}
          >
            <a href="#css">css</a>
          </li>
          <li
            onClick={() => {
              setChannel("slide");
            }}
            onMouseOver={listHoverHandle}
            onMouseLeave={listOutHandle}
          >
            <a href="#slide">slide</a>
          </li>
        </ul>
      </div>
      <div
        className={`home-cursor ${active}`}
        style={{ left: left, top: top }}
      ></div>
    </div>
  );
}

export default Home;
