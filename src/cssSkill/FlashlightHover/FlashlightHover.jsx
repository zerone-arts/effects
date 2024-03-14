import React, { useEffect, useRef, useState } from "react";
import "./FlashlightHover.css";

let cardArr = ["#0f0", "#ff0", "#f00", "#f0f", "#0ff"];
let cards = [];

for (let i = 0; i <= 2; i++) {
  cards.push(...cardArr);
}
cards.push(cardArr[0]);

function FlashlightHover(props) {
  const [hoverNum, setHoverNum] = useState(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const cardRef = useRef(null);

  const moveHandle = (e) => {
    setX(e.pageX - e.target.offsetLeft);
    setY(e.pageY - e.target.offsetTop);
  };

  const hoverHandle = (e, idx) => {
    setHoverNum(idx);
  };

  return (
    <div className="fh-container">
      <div className="fh-wrapper">
        {cards.map((item, idx) => {
          return (
            <div
              ref={cardRef}
              key={idx}
              className="card"
              id={idx}
              onMouseMove={(e) => moveHandle(e)}
              onMouseOver={(e) => hoverHandle(e, idx)}
            >
              <div
                className="inCard"
                style={
                  idx === hoverNum
                    ? {
                        background: `radial-gradient(${item},transparent,transparent)`,
                        top: `${y - 30}px`,
                        left: `${x - 30}px `,

                        transform: `translate(-50%, -50%)`,
                      }
                    : {
                        background: `radial-gradient(${item},transparent,transparent)`,
                      }
                }
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FlashlightHover;
