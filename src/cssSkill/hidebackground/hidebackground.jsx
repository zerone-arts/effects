import React from "react";
import "./hidebackground.css";

let list = Array(2500).fill("");

function Hidebackground(props) {
  return (
    <div className="hb-container">
      {list.map((item, idx) => {
        return <span key={idx}></span>;
      })}
    </div>
  );
}

export default Hidebackground;
