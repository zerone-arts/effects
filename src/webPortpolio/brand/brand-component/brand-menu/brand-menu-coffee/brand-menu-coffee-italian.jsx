import React, { useEffect, useState } from "react";
import Espresso from "../../../img/brand-menu-coffee/espresso.jpeg";
import Macchiato from "../../../img/brand-menu-coffee/macchiato.jpeg";
import Affogato from "../../../img/brand-menu-coffee/affogato.jpeg";

let italianList = ["Espresso", "Macchiato", "Affogato"];

let afterArr = italianList[0];

let italianEx = [
  {
    name: "에스프레소",
    ex: "말린 과일의 산미와 초콜릿의 단맛의 조화를 느낄 수 있는 이탈리안 정통 에스프레소",
    caffeine: "138mg",
  },
  {
    name: "에스프레소 마끼아또",
    ex: "에스프레소 위에 벨벳 밀크폼을 혼합하여 진하면서도 부드러운 마우스필을 느낄 수 있는 커피",
    caffeine: "115mg",
  },
  {
    name: "아포가또",
    ex: "천일염으로 만든 젤라또에 에스프레소를 가미한 파스쿠찌 오리지날 아포가또",
    caffeine: "130mg",
  },
];

let italianArr = [
  "Macchiato",
  "Affogato",
  ...italianList,
  afterArr,
  "Macchiato",
];
let ImgArr = [
  Macchiato,
  Affogato,
  Espresso,
  Macchiato,
  Affogato,
  Espresso,
  Macchiato,
];

function BrandMenuCoffeeItalian(props) {
  const [listTitle, setListTitle] = useState("Espresso");
  const [count, setCount] = useState(2);
  const [translate, setTranslate] = useState(-270);
  const [translateTitle, setTranslateTitle] = useState(20);
  const [transition, setTransition] = useState(`1s all`);
  const [exCount, setExCount] = useState(0);
  const leftHandle = () => {
    setTranslate((prev) => prev + 270);
    setTranslateTitle((prev) => prev + 20);
    setCount((prev) => prev - 1);
  };
  const rightHandle = () => {
    setTranslate((prev) => prev - 270);
    setTranslateTitle((prev) => prev - 20);
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (count === 1) {
      setTimeout(() => {
        setTransition("none");
        setTranslate(-810);
        setTranslateTitle(-20);
        setCount(4);
      }, 1050);
      setTimeout(() => {
        setTransition(`1s all`);
      }, 1100);
    }
    if (count === 5) {
      setTimeout(() => {
        setTransition("none");
        setTranslate(-270);
        setTranslateTitle(20);
        setCount(2);
      }, 1050);
      setTimeout(() => {
        setTransition(`1s all`);
      }, 1100);
    }

    if (count == 2 || count == 5) {
      setExCount(0);
    }
    if (count == 3) {
      setExCount(1);
    }

    if (count == 1 || count == 4) {
      setExCount(2);
    }
  }, [count]);

  return (
    <div className="brand-menu-coffee-italian">
      <div className="brand-menu-coffee-italian-menu">
        <ul className="brand-menu-coffee-italian-menu-Arr">
          <button
            className="brand-menu-coffee-italian-left"
            onClick={leftHandle}
          ></button>
          <button
            className="brand-menu-coffee-italian-right"
            onClick={rightHandle}
          ></button>
          {italianArr.map((item, idx) => {
            return (
              <li
                key={idx}
                className="brand-menu-coffee-italian-menu-list"
                style={{
                  transform: `translateX(${translate}px)`,
                  transition: transition,
                }}
              >
                <img
                  src={ImgArr[idx]}
                  style={
                    count === idx
                      ? { transform: `scale(1)`, transition: transition }
                      : { transform: `scale(0.7)`, transition: transition }
                  }
                />
              </li>
            );
          })}
        </ul>

        <div className="brand-menu-coffee-italian-menu-title">
          <ul>
            {italianArr.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="brand-menu-coffee-italian-menu-title-list"
                  style={{
                    transform: `translateY(${translateTitle}px)`,
                    transition: transition,
                  }}
                >
                  {item === "Macchiato" ? "Espresso Macchiato" : item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="brand-menu-coffee-italian-menu-line"></div>
      <div className="brand-menu-coffe-italian-menu-ex">
        <h2>{italianEx[exCount].name}</h2>
        <p>{italianEx[exCount].ex}</p>
        <p>Caffeine : {italianEx[exCount].caffeine}</p>
      </div>
    </div>
  );
}

export default BrandMenuCoffeeItalian;
