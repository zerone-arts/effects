import React, { useState } from "react";
import "./iphonedynamic.css";
import img from "./img2.png";

function Iphonedynamic(props) {
  const [active, setActive] = useState("");

  const clickHandle = () => {
    active === "" ? setActive("active") : setActive("");
  };
  return (
    <div className="id-container">
      <div className="id-box">
        <div className="id-inner">
          <div className={`id-island-popup ${active}`} onClick={clickHandle}>
            <div className="id-content">
              <div className="id-details">
                <div className="id-imgBx">
                  <img src={img} alt="img" />
                </div>
                <p>Andrew Chunsik</p>
              </div>
              <div className="id-action">
                <ion-icon name="call" id="red"></ion-icon>
                <ion-icon name="call" id="green"></ion-icon>
              </div>
            </div>
          </div>
        </div>
        <i className="btn btn1"></i>
        <i className="btn btn2"></i>
        <i className="btn btn3"></i>
        <i className="rightSideBtn"></i>
      </div>
    </div>
  );
}

export default Iphonedynamic;
