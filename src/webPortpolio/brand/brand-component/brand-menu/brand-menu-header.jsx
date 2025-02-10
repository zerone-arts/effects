import React, { useState } from "react";
import { Link } from "react-router-dom";

let menuArr = ["Coffee", "Beverage", "Gelato", "Food", "Md"];

function BrandMenuHeader(props) {
  const [choiseIdx, setChoiseIdx] = useState(0);

  const idxHandle = (idx) => {
    setChoiseIdx(idx);
  };

  return (
    <div className="brand-menu-header">
      <ul>
        {menuArr.map((item, idx) => {
          return (
            <Link
              to={
                idx === 0
                  ? `/web/brand/menu`
                  : `/web/brand/menu/${item.toLocaleLowerCase()}`
              }
              key={idx}
              className="brand-menu-Link"
              onClick={() => idxHandle(idx)}
            >
              <li
                key={idx}
                className="brand-menu-list"
                style={
                  choiseIdx === idx
                    ? { color: "black" }
                    : { color: "lightgray" }
                }
              >
                {item}
                <div
                  key={idx}
                  className="brand-menu-list-line"
                  style={
                    choiseIdx === idx
                      ? { borderColor: "black" }
                      : { borderColor: "transparent" }
                  }
                ></div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default BrandMenuHeader;
