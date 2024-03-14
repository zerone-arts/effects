import React, { useState, useEffect, useRef } from "react";
import "./home.css";
import HomeCss from "./css/home-css";
import HomeWeb from "./web/home-web";
import bg1 from "./img/bg1.jpg";
import bg2 from "./img/bg2.jpg";
import bg3 from "./img/bg3.jpg";
import bg4 from "./img/bg4.jpg";
import bg5 from "./img/bg5.jpg";
import bg6 from "./img/bg6.jpg";
import bg7 from "./img/bg7.jpg";
import bg8 from "./img/bg8.jpg";
import HomeSlide from "./slide/home-slide";
import HomeCanvas from "./canvas/home-canvas";

let bgList = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8];
function Home({ left, top }) {
  const [channel, setChannel] = useState("css");
  const [title, setTitle] = useState("");

  const [active, setActive] = useState("");

  const [bgNum, setBgNum] = useState(Math.floor(Math.random() * bgList.length));

  const containerRef = useRef(null);
  const webRef = useRef(null);
  const cssRef = useRef(null);
  const slideRef = useRef(null);
  const canvasRef = useRef(null);

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

  return (
    <div className="home-container" id="container" ref={containerRef}>
      <div className="home-bg">
        {bgList.map((item, idx) => {
          return (
            <img
              src={item}
              alt={item}
              key={idx}
              style={idx === bgNum ? { opacity: 1 } : { opacity: 0 }}
            />
          );
        })}
      </div>
      <div className="home-select" id="css" ref={cssRef}>
        <HomeCss titleHandle={(e) => titleHandle(e)} />
        {channel === "css" ? (
          <div className="home-titleBx" style={{ left: left, top: top }}>
            {title}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="home-select" id="web" ref={webRef}>
        <HomeWeb titleHandle={(e) => titleHandle(e)} />
        {channel === "web" ? (
          <div className="home-titleBx" style={{ left: left, top: top }}>
            {title}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="home-select" id="slide" ref={slideRef}>
        <HomeSlide titleHandle={(e) => titleHandle(e)} />
        {channel === "slide" ? (
          <div className="home-titleBx" style={{ left: left, top: top }}>
            {title}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="home-select" id="canvas" ref={canvasRef}>
        <HomeCanvas titleHandle={(e) => titleHandle(e)} />
        {channel === "canvas" ? (
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
              setChannel("css");
              setBgNum(Math.floor(Math.random() * bgList.length));
            }}
            onMouseOver={listHoverHandle}
            onMouseLeave={listOutHandle}
          >
            <a href="#css">css</a>
          </li>
          <li
            onClick={() => {
              setChannel("web");
              setBgNum(Math.floor(Math.random() * bgList.length));
            }}
            onMouseOver={listHoverHandle}
            onMouseLeave={listOutHandle}
          >
            <a href="#web">web</a>
          </li>
          <li
            onClick={() => {
              setChannel("slide");
              setBgNum(Math.floor(Math.random() * bgList.length));
            }}
            onMouseOver={listHoverHandle}
            onMouseLeave={listOutHandle}
          >
            <a href="#slide">slide</a>
          </li>
          <li
            onClick={() => {
              setChannel("canvas");
              setBgNum(Math.floor(Math.random() * bgList.length));
            }}
            onMouseOver={listHoverHandle}
            onMouseLeave={listOutHandle}
          >
            <a href="#canvas">canvas</a>
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
