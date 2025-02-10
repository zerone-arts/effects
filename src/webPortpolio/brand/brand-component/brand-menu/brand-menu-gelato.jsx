import React, { useEffect, useState } from "react";
import mock from "../../brand-component/brand-menu/bran-menu-beverage/beverage.json";
import { GelatoImgArr } from "./bran-menu-beverage/beverage-gelato";

function BrandMenuGelato(props) {
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
        <h2>Italian Gelato</h2>
        <ul className="brand-menu-beverage-list">
          {mock.gelato.map((item, idx) => {
            return (
              <li key={idx}>
                <img src={GelatoImgArr[idx]} />
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

export default BrandMenuGelato;
