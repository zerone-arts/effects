import React, { useState } from "react";
import "./climbobject.css";

function Climbobject(props) {
  return (
    <div className="co-container">
      <div className="co-allbox">
        <div className="co-box">
          <div className={`co-cube `}></div>
        </div>
      </div>
    </div>
  );
}

export default Climbobject;
