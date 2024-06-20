import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./home-css.css";
let list = [
  { icon: "CC", name: "ChangeCursor" },
  { icon: "MA", name: "MenuAnimation" },
  { icon: "SPC", name: "SlideProductCard" },
  { icon: "IM", name: "IsometricMenu" },
  { icon: "RM", name: "RandomMove" },
  { icon: "NT", name: "NeonText" },
  { icon: "LT", name: "LoginTheme" },
  { icon: "FC", name: "FuturisticCard" },
  { icon: "PC", name: "ProductCard" },
  { icon: "AO", name: "AnimateObject" },
  { icon: "CP", name: "ClickPaint" },
  { icon: "GH", name: "GalleryHover" },
  { icon: "RM", name: "RadialMenu" },
  { icon: "SE", name: "scrollEvent" },
  { icon: "C3", name: "Cube3d" },
  { icon: "MI", name: "MediaIcon" },
  { icon: "IG", name: "IconBackGround" },
  { icon: "IL", name: "InfinityLoading" },
  { icon: "SMH", name: "SocialMediaHover" },
  { icon: "iD", name: "iPhoneDynamic" },
  { icon: "GL", name: "GradientLoading" },
  { icon: "SN", name: "SlidingNavigation" },
  { icon: "HB", name: "HideBackground" },
  { icon: "FT", name: "FlyingText" },
  { icon: "I15P", name: "Iphone15Pro" },
  { icon: "CO", name: "ClimbObject" },
  { icon: "L", name: "Light" },
  { icon: "LA", name: "LoaderAnimate" },
  { icon: "CT", name: "CircleText" },
  { icon: "FH", name: "FlashlightHover" },
  { icon: "RB", name: "RandomBackground" },
  { icon: "ROM", name: "RadialOctagonMenu" },
  { icon: "", name: "" },
  { icon: "", name: "" },
  { icon: "", name: "" },
  { icon: "", name: "" },
  { icon: "", name: "" },
  { icon: "", name: "" },
  { icon: "", name: "" },
  { icon: "", name: "" },
];
function HomeCss({ titleHandle, scrollChannelHandle }) {
  const [title, setTitle] = useState("");
  const cssRef = useRef(null);

  const OverHandle = (e, item) => {
    setTitle(item.name);
  };

  const OutHandle = () => {
    setTitle("");
  };
  useEffect(() => {
    titleHandle(title);
  }, [title]);

  const handleScroll = () => {
    if (cssRef.current?.getBoundingClientRect().top <= 240) {
      scrollChannelHandle("css");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  return (
    <div className="home-css-container" ref={cssRef}>
      <div className="home-css">
        <ul>
          {list.map((item, idx) => {
            return item.icon !== "" ? (
              <li
                key={idx}
                onMouseOver={(e) => OverHandle(e, item)}
                onMouseLeave={OutHandle}
              >
                <Link to={`/css/${item.name.toLowerCase()}`}>{item.icon}</Link>
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

export default HomeCss;
