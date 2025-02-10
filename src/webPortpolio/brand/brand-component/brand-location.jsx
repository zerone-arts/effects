import React from "react";
import map from "../img/location.png";

function BrandLocation() {
  return (
    <div className="brand-Location">
      <div className="brand-location-container">
        <div className="location-map">
          <img src={map} alt="map" />
        </div>
        <ul className="location-location">
          <li>
            <span className="material-symbols-outlined">location_on</span>
            건주로 4길 10 - 4 2층 도련일동 제주시 제주특별자치도 KR
          </li>
          <li>
            <span className="material-symbols-outlined">schedule</span> AM 08 :
            00 ~ PM 24 : 00 {`( No days off )`}
          </li>
          <li>
            <span className="material-symbols-outlined">call</span> 064 - 722 -
            8497
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BrandLocation;
