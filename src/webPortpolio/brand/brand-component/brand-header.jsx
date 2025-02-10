import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import dot from "../img/dot.png";

let CategoryArr = ["Branding", "Menu", "Media", "Location"];

function BrandHeader({ colorHandle, mainFColor }) {
  const [categoryIdx, setCategoryIdx] = useState("");
  const [clickIdx, setClickidx] = useState("");
  const [renderingIdx, setRenderingIdx] = useState("");

  const MainHandle = () => {
    setClickidx("");
    colorHandle("white");
    setRenderingIdx("main");
  };

  const idxClickHandle = (e, idx) => {
    setClickidx(idx);
    if (idx === 0) {
      colorHandle("white");
      setRenderingIdx(0);
    } else if (idx === 1) {
      colorHandle("black");
      setRenderingIdx(1);
    } else if (idx === 2) {
      colorHandle("black");
      setRenderingIdx(2);
    } else if (idx === 3) {
      colorHandle("black");
      setRenderingIdx(3);
    }
  };

  const idxHandle = (e, idx) => {
    setCategoryIdx(idx);
  };
  const idxLeaveHandle = () => {
    setCategoryIdx("");
  };

  let path = window.location.pathname;

  useEffect(() => {
    if (path === "/web/brand/") {
      colorHandle("white");
      setRenderingIdx("main");
    } else if (path === "/web/brand/branding") {
      colorHandle("white");
      setRenderingIdx(0);
    } else if (path === "/web/brand/menu/*") {
      colorHandle("black");
      setRenderingIdx(1);
    } else if (path === "/web/brand/media") {
      colorHandle("black");
      setRenderingIdx(2);
    } else if (path === "/web/brand/location") {
      colorHandle("black");
      setRenderingIdx(3);
    }
  }, []);
  useEffect(() => {
    if (path === "/web/brand/menu") {
      setRenderingIdx(1);
    } else if (path === "/web/brand/menu/beverage") {
      setRenderingIdx(1);
    } else if (path === "/web/brand/menu/food") {
      setRenderingIdx(1);
    } else if (path === "/web/brand/menu/gelato") {
      setRenderingIdx(1);
    } else if (path === "/web/brand/menu/md") {
    }
  }, []);

  const borderHandle = () => {
    return { borderBottom: `1px solid #e51937`, color: mainFColor };
  };

  return (
    <div className="header">
      <Link to="/web/brand/" className="logoBox" onClick={MainHandle}>
        <img className="dot" src={dot} />
        <h1 className="samhwa">CAFFE PASCUCCI</h1>
        <h2 className="samhwa" style={{ color: mainFColor }}>
          SAMHWA
        </h2>
      </Link>
      <ul className="categoryBox">
        {CategoryArr.map((item, idx) => {
          return (
            <Link
              key={idx}
              value={idx}
              to={`/web/brand/${item.toLocaleLowerCase()}`}
              className={`category ${item}`}
              style={
                categoryIdx === ""
                  ? { color: `white` }
                  : categoryIdx == idx
                  ? { color: `#e51937` }
                  : { color: `white` }
              }
              onClick={(e) => idxClickHandle(e, idx)}
              onMouseEnter={(e) => idxHandle(e, idx)}
              onMouseLeave={idxLeaveHandle}
            >
              <li
                style={
                  renderingIdx === idx
                    ? borderHandle()
                    : { border: `none`, color: mainFColor }
                }
              >
                {item === "Branding" ? "Brand" : item}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default BrandHeader;
