import React, { useState, useRef, useEffect, useNavigate } from "react";
import BrandingMain from "./brand-branding/branding-main";
import BrandingCh1 from "./brand-branding/branding-ch1";
import BrandingCh2 from "./brand-branding/branding-ch2";
import BrandingCh3 from "./brand-branding/branding-ch3";

let btnArr = ["main", "01", "02", "03"];
function BrandBranding() {
  const [btnNum, setBtnNum] = useState(0);
  const [scroll, setScroll] = useState((410 * window.innerHeight) / 100);
  const [brandFixed, setbrandFixed] = useState(0);
  const [brand01, setbrand01] = useState(0);
  const [brand02, setbrand02] = useState(0);
  const [brand03, setbrand03] = useState(0);
  const [height, setHeight] = useState(1);

  useEffect(() => {
    setbrand01(scroll / 4);
    setbrand02((scroll / 4) * 2 + 1);
    setbrand03((scroll / 4) * 3 + 1);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    // if (window.scrollY < scroll / 4) {
    //   setbrandFixed(true);
    // } else if (window.scrollY > scroll / 4) {
    //   setbrandFixed(false);
    // }
    if (window.scrollY > 1) {
      setHeight(`${(window.scrollY / ((scroll / 4) * 3 + 1)) * 100}%`);
    }
  };

  const scrollMoveHandle = (idx) => {
    if (idx === 0) {
      setBtnNum(0);
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
      });
    } else if (idx === 1) {
      setBtnNum(1);
      window.scrollTo({
        left: 0,
        top: (110 * window.innerHeight) / 100,
        behavior: "smooth",
      });
    } else if (idx === 2) {
      setBtnNum(2);
      window.scrollTo({
        left: 0,
        top: (210 * window.innerHeight) / 100,
        behavior: "smooth",
      });
    } else if (idx === 3) {
      setBtnNum(3);
      window.scrollTo({
        left: 0,
        top: (310 * window.innerHeight) / 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="brand-Branding">
      <div className="branding-messenger">
        <h2>Branding</h2>
      </div>

      <div className="branding-btnLinebox">
        <div className="branding-btnLIneBox-Line"></div>
        <div
          className="branding-btnLIneBox-Line2"
          style={{ height: height }}
        ></div>
      </div>
      <ul className="branding-btnNumbox">
        {btnArr.map((item, idx) => {
          return (
            <li
              key={idx}
              className={`branding-btnNumbox-${item}`}
              style={btnNum === idx ? { opacity: 1 } : { opacity: 0.7 }}
              onClick={() => scrollMoveHandle(idx)}
            >
              {idx === 0 ? "Brand" : item}
            </li>
          );
        })}
      </ul>

      <BrandingMain />
      <BrandingCh1 />
      <BrandingCh2 />
      <BrandingCh3 />
    </div>
  );
}

export default BrandBranding;
