import React, { useEffect, useState } from "react";
import iceHazelnut from "../../../img/brand-menu-ice/iced_94353.jpg";
import iceAmericano from "../../../img/brand-menu-ice/아이스아메리카노_154527.jpg";
import iceCaffeLatte from "../../../img/brand-menu-ice/아이스카페라떼_154558.jpg";
import iceCaramel from "../../../img/brand-menu-ice/아이스카라멜라떼마끼아또_154655.jpg";
import iceVanilla from "../../../img/brand-menu-ice/아이스바닐라라떼마끼아또_15486.jpg";
import iceMocha from "../../../img/brand-menu-ice/아이스카페모카_92612.jpg";
let hotList = [
  "IceAmericano",
  "IceCaffelatte",
  "IceCaramel",
  "IceVanilla",
  "IceHazelnut",
  "IceMocha",
];

let hotEx = [
  {
    name: "아이스 아메리카노",
    ex: "에스프레소와 정수된 물, 얼음을 혼합한 아이스 커피",
    caffeine: "213mg",
  },
  {
    name: "아이스 카페라뗴",
    ex: "농도 짙은 에스프레스와 우유, 얼음을 혼합한 아이스 커피",
    caffeine: "219mg",
  },
  {
    name: "아이스 카라멜라떼 마끼아또",
    ex: "달콤한 카라멜과 우유에 에스프레소를 혼합한 아이스 커피",
    caffeine: "218mg",
  },
  {
    name: "아이스 바닐라라떼 마끼아또",
    ex: "고소한 바닐라와 우유에 에스프레소를 혼합한 아이스 커피",
    caffeine: "204mg",
  },
  {
    name: "아이스 카페 헤이 오트",
    ex: "골든색 원두와 헤이즐넛 향의 풍미가 식물성 귀리음료와 어우러져 달콤 고소한 파스쿠찌만의 시그니처 카페라떼",
    caffeine: "157mg",
  },
  {
    name: "아이스 카페모카",
    ex: "달콤한 초콜릿과 우유에 에스프레소를 혼합 한 후, 생크림을 얹은 아이스 커피",
    caffeine: "202mg",
  },
];

let hotArr = [
  "IceHazelnut",
  "IceMocha",
  ...hotList,
  "IceAmericano",
  "IceCaffelatte",
];
let hotNameArr = [
  "Iced Caffe Hazelnut Oat",
  "Iced Caffe'Mocha",
  "Iced Americano",
  "Iced Caffe'Latte",
  "Iced Caramel Macchiato",
  "Iced Latte Macciato (Vanilla)",
  "Iced Caffe Hazelnut Oat",
  "Iced Caffe'Mocha",
  "Iced Americano",
  "Iced Caffe'Latte",
];
let ImgArr = [
  iceHazelnut,
  iceMocha,
  iceAmericano,
  iceCaffeLatte,
  iceCaramel,
  iceVanilla,
  iceHazelnut,
  iceMocha,
  iceAmericano,
  iceCaffeLatte,
];

function BrandMenuCoffeeIce(props) {
  const [count, setCount] = useState(2);
  const [translate, setTranslate] = useState(-270);
  const [translateTitle, setTranslateTitle] = useState(50);
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
        setTranslate(-1620);
        setTranslateTitle(-50);
        setCount(8);
      }, 1050);
      setTimeout(() => {
        setTransition(`1s all`);
      }, 1100);
    }
    if (count === 8) {
      setTimeout(() => {
        setTransition("none");
        setTranslate(-270);
        setTranslateTitle(50);
        setCount(2);
      }, 1050);
      setTimeout(() => {
        setTransition(`1s all`);
      }, 1100);
    }

    if (count == 2 || count == 8) {
      setExCount(0);
    }
    if (count == 3) {
      setExCount(1);
    }
    if (count == 4) {
      setExCount(2);
    }
    if (count == 5) {
      setExCount(3);
    }
    if (count == 6) {
      setExCount(4);
    }

    if (count == 1 || count == 7) {
      setExCount(5);
    }
  }, [count]);

  console.log(count);
  console.log(translateTitle);

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
          {hotArr.map((item, idx) => {
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
            {hotNameArr.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="brand-menu-coffee-italian-menu-title-list"
                  style={{
                    transform: `translateY(${translateTitle}px)`,
                    transition: transition,
                  }}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="brand-menu-coffee-italian-menu-line"></div>
      <div className="brand-menu-coffe-italian-menu-ex">
        <h2>{hotEx[exCount].name}</h2>
        <p>{hotEx[exCount].ex}</p>
        <p>Caffeine : {hotEx[exCount].caffeine}</p>
      </div>
    </div>
  );
}

export default BrandMenuCoffeeIce;
