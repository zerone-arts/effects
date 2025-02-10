import React from "react";

import art_main from "./img/art_main2.png";

function OdMain({ headerHandle, mainClick }) {
  return (
    <div
      className="od-main"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 10, 12, 0.5), rgba(10, 10, 12, 0.4)),url(${art_main})`,
      }}
    >
      <h1>The Great Outdoors</h1>
      <h2>Wander often. Wander always.</h2>
      <div className="od-play">
        <div className="od-triangle"></div>
      </div>
    </div>
    // <div className="od-ch1"></div>
  );
}
export default OdMain;
