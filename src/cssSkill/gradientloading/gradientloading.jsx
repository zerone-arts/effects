import React from "react";
import "./gradientloading.css";

let text = "Neumorphism Gradient Loading Animation Effects -";
text.split("");
function Gradientloading(props) {
  return (
    <div className="gl-container">
      <div className="gl-loader">
        <div className="gl-text">
          <p>
            {text.split("").map((item, idx) => {
              return (
                <b key={idx} style={{ transform: `rotate(${idx * 7.35}deg)` }}>
                  {item}
                </b>
              );
            })}
          </p>
        </div>
        <span>
          <i></i>
        </span>
      </div>
    </div>
  );
}

export default Gradientloading;
