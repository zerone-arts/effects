import React from "react";
import "../css/act5.css";
import objImg from "../img/act5-obj-img.jpg";
function Act5(props) {
  return (
    <div className="act5-container">
      <div className="act5-objBox">
        <div className="act5-objImg">
          <img src={objImg} alt="objImg" />
        </div>
        <p className="act5-objText1">I don't mean</p>
        <p className="act5-objTitle">
          Photography <br />
          Portfolio
        </p>
        <p className="act5-objText2">Amugeona</p>
      </div>
      <div className="act5-textBox">
        <h2>Lorem, ipsum.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere odit
          deserunt repellendus quo rerum optio similique error velit reiciendis
          eveniet.
        </p>
      </div>
    </div>
  );
}

export default Act5;
