import React from "react";
import "./sliderotation3d.css";

import dragon1 from "./img/dragon_1.jpg";
import dragon2 from "./img/dragon_2.jpg";
import dragon3 from "./img/dragon_3.jpg";
import dragon4 from "./img/dragon_4.jpg";
import dragon5 from "./img/dragon_5.jpg";
import dragon6 from "./img/dragon_6.jpg";
import dragon7 from "./img/dragon_7.jpg";
import dragon8 from "./img/dragon_8.jpg";
import dragon9 from "./img/dragon_9.jpg";
import dragon10 from "./img/dragon_10.jpg";

const ImgBox = [
  {
    id: 1,
    img: dragon1,
  },
  {
    id: 2,
    img: dragon2,
  },
  {
    id: 3,
    img: dragon3,
  },
  {
    id: 4,
    img: dragon4,
  },
  {
    id: 5,
    img: dragon5,
  },
  {
    id: 6,
    img: dragon6,
  },
  {
    id: 7,
    img: dragon7,
  },
  {
    id: 8,
    img: dragon8,
  },
  {
    id: 9,
    img: dragon9,
  },
  { id: 10, img: dragon10 },
];

function Sliderotation3d(props) {
  return (
    <div className="sr3-container">
      <div className="sr3-bg"></div>
      <div className="sr3-wrapper">
        <ul className="sr3-slider">
          {ImgBox.map((item, idx) => {
            return (
              <li
                key={item.idx}
                style={{
                  transform: `rotateY(calc(${idx} * (360 / 10 * 1deg))) 
                  translateZ(550px)`,
                }}
              >
                <img src={item.img} alt="dragon" />
              </li>
            );
          })}
        </ul>

        <div className="sr3-content">
          <h1 className="sr3-content-text">CSS ONLY</h1>
          <div className="author">
            <h2>LUN DEV</h2>
            <p>
              <b>Web Design</b>
            </p>
            <p>Subscribe to the channel to watch many interesting videos</p>
          </div>
          <div className="sr3-model"></div>
        </div>
      </div>
    </div>
  );
}

export default Sliderotation3d;
