import React, { useEffect, useState } from "react";
import mock from "../../brand-component/brand-menu/bran-menu-beverage/beverage.json";
import { SeasonImgArr } from "./bran-menu-beverage/beverage-seasonal";
import { GranitaImgArr } from "./bran-menu-beverage/beverage-granita";
import { TeaImgArr } from "./bran-menu-beverage/beverage-tea";
import { OthersImgArr } from "./bran-menu-beverage/beverage-others";

console.log(window.scrollTo());

function BrandMenuBeverage(props) {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 200) {
      setScroll(true);
    } else if (window.scrollY === 0) {
      setScroll(false);
    }
  };

  const scrollHandle = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="brand-menu-beverage">
      {scroll && (
        <button className="upHandle" onClick={scrollHandle}>
          <span className="material-symbols-outlined">expand_less</span>
        </button>
      )}
      <div className="brand-menu-beverage-list-box">
        <h2>Seasonal</h2>
        <ul className="brand-menu-beverage-list">
          {mock.seasonal.map((item, idx) => {
            return (
              <li key={idx}>
                <img src={SeasonImgArr[idx]} />
                <p> {item.kname}</p>
                <p> {item.ename}</p>
                <p> {item.ex}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="brand-menu-beverage-list-box">
        <h2>Italian Granita</h2>
        <ul className="brand-menu-beverage-list">
          {mock.granita.map((item, idx) => {
            return (
              <li key={idx}>
                <img src={GranitaImgArr[idx]} />
                <p> {item.kname}</p>
                <p> {item.ename}</p>
                <p> {item.ex}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="brand-menu-beverage-list-box">
        <h2>Tea</h2>
        <ul className="brand-menu-beverage-list">
          {mock.Tea.map((item, idx) => {
            return (
              <li key={idx}>
                <img src={TeaImgArr[idx]} />
                <p> {item.kname}</p>
                <p> {item.ename}</p>
                <p> {item.ex}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="brand-menu-beverage-list-box">
        <h2>Others</h2>
        <ul className="brand-menu-beverage-list">
          {mock.others.map((item, idx) => {
            return (
              <li key={idx}>
                <img src={OthersImgArr[idx]} />
                <p> {item.kname}</p>
                <p> {item.ename}</p>
                <p> {item.ex}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default BrandMenuBeverage;
