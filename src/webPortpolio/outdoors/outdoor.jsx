import React, { useEffect, useState } from "react";
import OdMain from "./od-Main";
import OdCh1 from "./od-ch1";
import OdCh2 from "./od-ch2";
import OdCh3 from "./od-ch3";
import "./outdoor.css";

function OutDoor({ headerHandle, mainClick }) {
  const [topbtn, setTopbtn] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > 360) {
      setTopbtn(1);
    } else {
      setTopbtn(0);
    }
  };

  const scrolltopHandle = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="od-container">
      <OdMain headerHandle={headerHandle} mainClick={mainClick} />
      <OdCh1 />
      <OdCh2 />
      <OdCh3 />

      {
        <button
          className="od-scrolltop"
          style={{ opacity: topbtn }}
          onClick={scrolltopHandle}
        >
          <span className="material-symbols-outlined">expand_less</span>
        </button>
      }
    </div>
  );
}
export default OutDoor;
