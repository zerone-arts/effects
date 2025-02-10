import React from "react";
import artItem1 from "./img/art-item1.png";
import artItem2 from "./img/art-item2.png";
import artItem3 from "./img/art-item3.jpg";

function OdCh1() {
  return (
    <div className="od-ch1">
      <h1 className="ch1-h1">Explore the World</h1>
      <p className="ch1-p">
        We seek to provide the most authentic content from athletes,
        adventurers,
      </p>
      <p className="ch1-p">
        explorers and travellers around the world. Our long-term mission is to
        educate,
      </p>
      <p className="ch1-p">
        inspire and enable all peoples to experience & protect wilderness.
      </p>

      <div className="ch1-box">
        <div
          className={`ch1-item one`}
          style={{ backgroundImage: `url(${artItem1})` }}
        >
          <div className="ch1-item-p">
            <p>Australia</p>
          </div>
        </div>
        <div
          className={`ch1-item two`}
          style={{ backgroundImage: `url(${artItem2})` }}
        >
          <div className="ch1-item-p">
            <p>Norway</p>
          </div>
        </div>
        <div
          className={`ch1-item three`}
          style={{ backgroundImage: `url(${artItem3})` }}
        >
          <div className="ch1-item-p">
            <p>Iceland</p>
          </div>
        </div>
      </div>
      <div className="ch1-btnbox">
        <button className="ch1-moreBtn">
          SEE MORE
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
}
export default OdCh1;
