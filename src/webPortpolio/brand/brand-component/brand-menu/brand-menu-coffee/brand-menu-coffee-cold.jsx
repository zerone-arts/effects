import React, { useEffect, useState } from "react";
import coldAmericano from "../../../img/brand-menu-cold/155132.jpg";
import coldLatte from "../../../img/brand-menu-cold/155227.jpg";
import coldMilk from "../../../img/brand-menu-cold/10335.jpg";
import coldOat from "../../../img/brand-menu-cold/12955.png";
import coldBrew from "../../../img/brand-menu-cold/153649.jpg";

let hotEx = [
  {
    name: "콜드브루 아메리카노",
    ex: "원두 고유의 향을 고스란히 간직한 부드러운 콜드브루 커피",
    caffeine: "201mg or decaf",
  },
  {
    name: "콜드브루 라떼",
    ex: "입안을 가득 채우는 깊은 풍미와 부드러움, 콜드브루 라떼",
    caffeine: "190mg or decaf",
  },
  {
    name: "연유 콜드브루 플로트",
    ex: "시원한 콜드브루에 달콤한 연유와 피오르디 젤라또를 띄워더욱 달콤하고 부드럽게 즐기는 이탈리안 스타일의 커피 플로트",
    caffeine: "160mg or decaf",
  },
  {
    name: "오트 콜드브루 플로트",
    ex: "고소한 식물성 오트음료와 콜드브루 커피, 젤라또를 더하여 고급스럽게 즐기는 음료",
    caffeine: "201mg or decaf",
  },
  {
    name: "콜드브루 원액",
    ex: "파스쿠찌만의 시그니처 커피 원액을 한 병 가득, 집에서도 취향에 맞게 즐길 수 있는 커피원액 베이스",
    caffeine: "",
  },
];

let hotArr = [
  "Oat Cold Brew Float",
  "Cold Brew",
  "Cold Brew Americano",
  "Cold Brew Latte",
  "Milky Cold Brew Float",
  "Oat Cold Brew Float",
  "Cold Brew",
  "Cold Brew Americano",
  "Cold Brew Latte",
];

let ImgArr = [
  coldOat,
  coldBrew,
  coldAmericano,
  coldLatte,
  coldMilk,
  coldOat,
  coldBrew,
  coldAmericano,
  coldLatte,
];

function BrandMenuCoffeeCold(props) {
  const [count, setCount] = useState(2);
  const [translate, setTranslate] = useState(-270);
  const [translateTitle, setTranslateTitle] = useState(40);
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
        setTranslate(-1350);
        setTranslateTitle(-40);
        setCount(7);
      }, 1050);
      setTimeout(() => {
        setTransition(`1s all`);
      }, 1100);
    }
    if (count === 7) {
      setTimeout(() => {
        setTransition("none");
        setTranslate(-270);
        setTranslateTitle(40);
        setCount(2);
      }, 1050);
      setTimeout(() => {
        setTransition(`1s all`);
      }, 1100);
    }

    if (count == 2 || count == 7) {
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

    if (count == 1 || count == 6) {
      setExCount(4);
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
            {hotArr.map((item, idx) => {
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

export default BrandMenuCoffeeCold;
