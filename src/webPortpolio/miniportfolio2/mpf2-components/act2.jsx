import React, { useState } from "react";
import "../css/act2.css";
import profileImg from "../img/tail.JPG";
import list1 from "../img/act2-list1.jpg";
import list2 from "../img/act2-list2.jpg";
import list3 from "../img/act2-list3.jpg";
function Act2(props) {
  const [profileBg, setProfileBg] = useState(0.5);
  const [test, setTest] = useState(0);

  const profileDownHandle = () => {
    setProfileBg(1);
  };
  const profileUpHandle = () => {
    setProfileBg(0.5);
  };

  return (
    <div className="act2-container">
      <div className="act2-titlebox">
        <h2>Brand me</h2>
        <p>
          나를 브랜딩하다. <br />
        </p>
      </div>
      <div className="act2-profilebox" id="profilebox">
        <div className="act2-profilebg"></div>
        <div
          className="act2-profile"
          style={{ backgroundColor: `rgba(108, 108, 108, ${profileBg})` }}
          onMouseDown={profileDownHandle}
          onMouseUp={profileUpHandle}
        >
          <h1 className="act2-profile-title">INTRODUCTION</h1>
          <div className="act2-profile-line">
            <hr></hr>
          </div>
          <div className="act2-profile-img">
            <img src={profileImg} alt="img"></img>
          </div>
          <h3>Kim Young Il</h3>
          <h4>zerone-@naver.com</h4>
        </div>
      </div>
      <div className="act2-listbox">
        <div className="act2-list" id="act2-list-1">
          <div>
            <img src={list1} alt="list1"></img>
          </div>
          <h3>Lorem.</h3>
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div className="act2-list" id="act2-list-2">
          <div>
            <img src={list2} alt="list2"></img>
          </div>
          <h3>Lorem.</h3>
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div className="act2-list" id="act2-list-3">
          <div>
            <img src={list3} alt="list3"></img>
          </div>
          <h3>Lorem.</h3>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
    </div>
  );
}

export default Act2;
