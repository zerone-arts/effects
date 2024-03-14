import React from "react";
import "./loaderanimate.css";

function Loaderanimate(props) {
  return (
    <div className="la-container">
      <div className="la-loader">
        <div className="la-inner one"></div>
        <div className="la-inner two"></div>
        <div className="la-inner three"></div>
      </div>
    </div>
  );
}

export default Loaderanimate;
