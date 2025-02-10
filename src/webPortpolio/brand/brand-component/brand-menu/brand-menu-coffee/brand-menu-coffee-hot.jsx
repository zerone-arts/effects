import React, { useEffect, useState } from "react";
import americano from "../../../img/brand-menu-hot/아메리카노_155657.jpg";
import caffelatte from "../../../img/brand-menu-hot/카페라떼_155720.jpg";
import cappuccino from "../../../img/brand-menu-hot/카푸치노_155752.jpg";
import caramel from "../../../img/brand-menu-hot/카라멜라떼마끼아또_16245.png";
import vanilla from "../../../img/brand-menu-hot/바닐라라떼마끼아또_16329.jpg";
import hazelnut from "../../../img/brand-menu-hot/hazelnutoat.jpg";
import mocha from "../../../img/brand-menu-hot/카페모카_16417.jpg";

let hotList = [
  "Americano",
  "Caffelatte",
  "Cappuccino",
  "Caramel",
  "Vanilla",
  "Hazelnut",
  "Mocha",
];

let hotEx = [
  {
    name: "아메리카노",
    ex: "뜨거운물에 에스프레소를 희석, 한층 부드럽고 깊은 아로마를 느낄 수 있는 레귤러 커피",
    caffeine: "227mg",
  },
  {
    name: "카페라뗴",
    ex: "에스프레소와 스팀우유를 혼합하여 우유의 고소함과 부드러운 마우스필을 함께 느낄 수 있는 마일드 커피",
    caffeine: "188mg",
  },
  {
    name: "카푸치노",
    ex: "에스프레소와 부드러운 벨벳 밀크폼을 혼합하여 커피와 우유거품의 절묘한 풍미를 느낄 수 있는 커피",
    caffeine: "190mg",
  },
  {
    name: "카라멜 라떼 마끼아또",
    ex: "달콤한 카라멜과 부드러운 스팀 밀크를 혼합 한 후, 에스프레소를 가미한 정통 이탈리아 라떼",
    caffeine: "196mg",
  },
  {
    name: "바닐라 라뗴 마끼아또",
    ex: "고소한 바닐라와 부드러운 스팀 밀크를 혼합 한 후, 에스프레소를 가미한 정통 이탈리아 라떼",
    caffeine: "188mg",
  },
  {
    name: "카페 헤이 오트",
    ex: "골든색 원두와 헤이즐넛 향의 풍미가 식물성 귀리음료와 어우러져 달콤 고소한 파스쿠찌만의 시그니처 카페라떼",
    caffeine: "227mg",
  },
  {
    name: "카페모카",
    ex: "달콤한 다크 초콜릿과 에스프레소에 부드러운 스팀 밀크를 혼합 한 후, 생크림을 얹은 베리에이션 커피",
    caffeine: "192mg",
  },
];

let hotArr = ["Hazelnut", "Mocha", ...hotList, "Americano", "Caffelatte"];
let hotNameArr = [
  "Caffe Hazelnut Oat",
  "Caffe'Mocha",
  "Americano",
  "Caffe'Latte",
  "Cappuccino",
  "Latte Macchiato (Caramel)",
  "Latte Macchiato (Vanilla)",
  "Caffe Hazelnut Oat",
  "Caffe'Mocha",
  "Americano",
  "Caffe`Latte",
];
let ImgArr = [
  hazelnut,
  mocha,
  americano,
  caffelatte,
  cappuccino,
  caramel,
  vanilla,
  hazelnut,
  mocha,
  americano,
  caffelatte,
];

function BrandMenuCoffeeHot(props) {
  const [count, setCount] = useState(2);
  const [translate, setTranslate] = useState(-270);
  const [translateTitle, setTranslateTitle] = useState(60);
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
        setTranslate(-1890);
        setTranslateTitle(-60);
        setCount(8);
      }, 1050);
      setTimeout(() => {
        setTransition(`1s all`);
      }, 1100);
    }
    if (count === 9) {
      setTimeout(() => {
        setTransition("none");
        setTranslate(-270);
        setTranslateTitle(60);
        setCount(2);
      }, 1050);
      setTimeout(() => {
        setTransition(`1s all`);
      }, 1100);
    }

    if (count == 2 || count == 9) {
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
    if (count == 7) {
      setExCount(5);
    }

    if (count == 1 || count == 8) {
      setExCount(6);
    }
  }, [count]);

  console.log(count);

  return (
    <div className="brand-menu-coffee-italian">
      <div className="brand-menu-coffee-italian-menu">
        <ul
          className="brand-menu-coffee-italian-menu-Arr"
          style={{ marginLeft: `20px` }}
        >
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

export default BrandMenuCoffeeHot;
