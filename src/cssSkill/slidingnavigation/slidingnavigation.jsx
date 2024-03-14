import React from "react";
import "./slidingnavigation.css";

let menuList = [
  { name: "home", src: <i className="fa-solid fa-house"></i> },
  { name: "profile", src: <i className="fa-solid fa-user"></i> },
  { name: "likes", src: <i className="fa-solid fa-heart"></i> },
  { name: "settings", src: <i className="fa-solid fa-gear"></i> },
  { name: "notifications", src: <i className="fa-solid fa-bell"></i> },
];

function Slidingnavigation(props) {
  return (
    <div className="sn-container">
      <div className="sn-tabs">
        {menuList.map((item, idx) => {
          return (
            <input key={idx} id={item.name} type="radio" name="tabsMenu" />
          );
        })}

        <button className="sn-buttons">
          {menuList.map((item, idx) => {
            return (
              <label key={idx} htmlFor={item.name}>
                {item.src}
              </label>
            );
          })}
          <div className="sn-underline"></div>
        </button>
      </div>
    </div>
  );
}

export default Slidingnavigation;
