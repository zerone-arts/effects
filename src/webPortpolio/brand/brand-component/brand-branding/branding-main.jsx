import React, { useState, useRef } from "react";

function BrandingMain() {
  const viewHandle = () => {
    window.scrollTo({
      left: 0,
      top: (110 * window.innerHeight) / 100,
      behavior: "smooth",
    });
  };
  return (
    <div className="branding-main">
      <div className="branding-textbox">
        <div>
          <span></span> A CAFFE PASCUCCI
        </div>
        <div>Only Top-Quality Coffee</div>
        <div>Carry On a 120year Tradition.</div>
        <button onClick={viewHandle}>
          view more
          <span className="material-symbols-outlined">arrow_downward</span>
        </button>
      </div>
    </div>
  );
}

export default BrandingMain;
