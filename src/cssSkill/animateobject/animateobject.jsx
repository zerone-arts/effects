import React, { useState } from "react";
import "./animateobject.css";

let aolist = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
function Animateobject(props) {
  const [click, setClick] = useState("");

  const clickHandle = () => {
    click === "" ? setClick("click") : setClick("");
  };
  return (
    <div className="ao-container">
      <div className="ao-bgtitle">Click Object</div>
      <div className={`ao-loader`} onClick={clickHandle}>
        {aolist.map((item, idx) => {
          return (
            <span
              key={idx}
              className={click}
              style={{ zIndex: item, animationDelay: `${item * -1}s` }}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

export default Animateobject;
