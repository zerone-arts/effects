import React from "react";
import "../css/act3.css";
import profileImg from "../img/tail.JPG";
function Act3(props) {
  return (
    <div className="act3-container">
      <div className="act3-box">
        <div className="act3-bg"></div>
        <div className="act3-profilebox">
          <div className="act3-profilebg"></div>
          <div className="act3-profile">
            <h1 className="act3-profile-title">INTRODUCTION</h1>
            <div className="act3-profile-line">
              <hr></hr>
            </div>
            <div className="act3-profile-img">
              <img src={profileImg} alt="img"></img>
            </div>
            <h3>Hello :)</h3>
            <h4></h4>
          </div>
        </div>
        <div className="act3-bottom"></div>
      </div>
    </div>
  );
}

export default Act3;
