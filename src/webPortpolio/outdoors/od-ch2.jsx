import React from "react";

import ch2Item1 from "./img/ch2-item1.png";
import ch2Item2 from "./img/ch2-item2.png";

function OdCh2() {
  return (
    <div className="od-ch2">
      <h1 className="ch2-h1">The Travel</h1>
      <p className="ch2-p">When you think you want to leave, you just leave.</p>
      <p className="ch2-p">the result will be perfect.</p>
      <div className="ch2-box">
        <div
          className="ch2-item"
          style={{ backgroundImage: `url(${ch2Item1})` }}
        >
          <h3>July 27, 2023</h3>
          <h1>Norway</h1>
        </div>
        <div
          className="ch2-item"
          style={{ backgroundImage: `url(${ch2Item2})` }}
        >
          <h3>December 10, 2023</h3>
          <h1>Iceland</h1>
        </div>
      </div>
      <div className="ch2-btnbox">
        <button className="ch2-moreBtn">
          ALL POSTS
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
}
export default OdCh2;
