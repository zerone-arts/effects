import React, { useEffect, useState } from "react";
import "./circletext.css";

let txt = "Circle-text-Effects";
let txtArr = txt.split("");

function Circletext(props) {
  const [left, setLeft] = useState("");
  const [top, setTop] = useState("");
  const [rotate, setRotate] = useState("");
  const [rotate2, setRotate2] = useState("");

  const moveHandle = (e) => {
    setTop(e.pageY + "px");
    setLeft(e.pageX + "px");
    setRotate(e.pageX / 2 + "deg");
    setRotate2(e.pageY / -2 + "deg");
  };

  useEffect(() => {
    document.addEventListener("mousemove", (e) => moveHandle(e));
  }, []);
  return (
    <div className="ct-container">
      <h2
        className="text"
        style={{
          left: left,
          top: top,
          transform: `rotate(${rotate}) rotate(${rotate2})`,
        }}
      >
        {txtArr.map((item, idx) => {
          return (
            <span key={idx} style={{ transform: `rotate(+${idx * 18}deg)` }}>
              {item}
            </span>
          );
        })}
      </h2>
    </div>
  );
}

export default Circletext;
