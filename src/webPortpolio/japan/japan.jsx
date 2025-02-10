import React, { useState, useEffect } from "react";
import "./japan.css";
import bgGreen from "./img/japan1.png";
import bgBlack from "./img/japan2.png";

function Japan(props) {
  const [shadow, setShadow] = useState("none");
  const [bgColor, setBgColor] = useState(bgBlack);
  const [height, setHeignt] = useState("340px");

  const ClickHandle = () => {
    height === "340px" ? setHeignt("450px") : setHeignt("340px");
  };

  const HoverHandle = () => {
    setShadow("1px 1px gray");
  };
  const HoverOutHandle = () => {
    setShadow("none");
  };
  const BlackHandle = () => {
    setBgColor(bgBlack);
  };
  const GreenHandle = () => {
    setBgColor(bgGreen);
  };

  return (
    <div className="japan-container">
      <div className="japan-titleBox" style={{ height: height }}>
        <h2
          style={{ textShadow: shadow }}
          onClick={ClickHandle}
          onMouseOver={HoverHandle}
          onMouseLeave={HoverOutHandle}
        >
          にっぽん
        </h2>
        <hr></hr>
        <div className="japan-btnBox">
          <button
            className="japan-color-btn"
            id="japan-color-btn-1"
            onClick={BlackHandle}
          ></button>
          <button
            className="japan-color-btn"
            id="japan-color-btn-2"
            onClick={GreenHandle}
          ></button>
        </div>
      </div>
      <div
        className="japan-textBgBox"
        style={{ backgroundImage: `url(${bgColor})` }}
      >
        <div className="japan-textBg" id="japan-textBg-1"></div>
        <div className="japan-bg"></div>
        <div className="japan-textBg" id="japan-textBg-2"></div>
        <div className="japan-bg"></div>
        <div className="japan-textBg" id="japan-textBg-3"></div>
        <div className="japan-bg"></div>
        <div className="japan-textBg" id="japan-textBg-4"></div>
        <div className="japan-bg"></div>
        <div className="japan-textBg" id="japan-textBg-5"></div>
      </div>
    </div>
  );
}

export default Japan;
