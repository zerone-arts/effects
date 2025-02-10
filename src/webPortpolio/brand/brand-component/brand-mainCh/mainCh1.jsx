import React, { useEffect, useRef, useState } from "react";
import slide0 from "../../img/brand-main-slide0.jpg";
import slide1 from "../../img/brand-main-slide1.jpg";
import slide2 from "../../img/brand-main-slide2.jpg";

let slideArr = [0, 1, 2];
let beforeArr = slideArr.length - 1;
let afterArr = slideArr[0];

let AllSlideArr = [beforeArr, ...slideArr, afterArr];

let imgbox = {
  0: slide0,
  1: slide1,
  2: slide2,
};

let Titlebox = {
  0: `" 파스쿠찌 삼화점 "`,
  1: `" 커피속의 이야기를 담다. "`,
  2: `" 기분 좋은 마음에 "`,
};
let sloganbox = {
  0: `" 친절과 정성을 다하겠습니다. "`,
  1: `" 커피향이 추억이 되다. "`,
  2: `" 한~짝 홀딱 빠라삐리뽀! "`,
};

function MainCh1() {
  const [count, setCount] = useState(100);
  const [transition, setTranstion] = useState(`1s all`);
  const [titleOpacity, setTitleOpacity] = useState(1);
  const [sloganOpacity, setSloganOpacity] = useState(1);
  const [titleTransition, setTitleTransition] = useState(`1s all`);
  const [countNum, setCountNum] = useState(0);

  function useInterval(callback, delay) {
    const savedCallback = useRef(); //클로저 역할을 해주는 useRef. 렌더를 해도 초기화 되지 않는다.

    // callback(setCount)가 변경될 때를 useEffect가 감지해서 최신상태를 저장한다.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // 인터벌과 클리어 세팅
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id); //바로바로 클리어를 해주기 때문에 메모리를 차지하지 않는다.
      }
    }, [delay]);
  }

  useInterval(() => {
    rightHandle();
  }, 5000);

  useEffect(() => {
    setTitleTransition("none");
    setTitleOpacity(0);
    setTimeout(() => {
      setTitleTransition("1s all");
      setTitleOpacity(1);
    }, 1000);

    setTitleTransition("none");
    setSloganOpacity(0);
    setTimeout(() => {
      setTitleTransition("1s all");
      setSloganOpacity(1);
    }, 2000);
  }, [count]);

  const rightHandle = () => {
    if (count === 300) {
      setCount((prev) => prev + 100);
      setTimeout(() => {
        setTranstion("none");
        setTitleTransition("none");
        setCount(100);
      }, 1000);
      setTimeout(() => {
        setTranstion(`1s all`);
        setTitleTransition("1s all");
      }, 1100);
    } else {
      setCount((prev) => prev + 100);
    }
  };

  const leftHandle = () => {
    if (count === 100) {
      setCount((prev) => prev - 100);

      setTimeout(() => {
        setTranstion("none");
        setTitleTransition("none");
        setCount(300);
      }, 1000);
      setTimeout(() => {
        setTranstion(`1s all`);
        setTitleTransition("1s all");
      }, 1100);
    } else {
      setCount((prev) => prev - 100);
    }
  };

  const btn1Handle = () => {
    setCount(100);
  };
  const btn2Handle = () => {
    setCount(200);
  };
  const btn3Handle = () => {
    setCount(300);
  };

  return (
    <div className="main-ch1-container">
      <div className="main-ch1-slidebox">
        <ul className="imgSilideBox">
          {AllSlideArr.map((item, idx) => {
            return (
              <li
                key={idx}
                className="main-ch1-slide"
                style={{
                  backgroundColor: "black",
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                  url(${imgbox[item]})`,
                  transform: `translateX(-${count}%)`,
                  transition: transition,
                }}
              ></li>
            );
          })}
        </ul>
        <ul className="titleSilideBox">
          {AllSlideArr.map((item, idx) => {
            return (
              <li
                key={idx}
                className="main-ch1-titleSlide"
                style={{
                  transform: `translateY(-${count}%)`,
                  transition: titleTransition,
                  opacity: titleOpacity,
                }}
              >
                <h2> {`${Titlebox[item]}`}</h2>
              </li>
            );
          })}
        </ul>
        <ul className="sloganSilideBox">
          {AllSlideArr.map((item, idx) => {
            return (
              <li
                key={idx}
                className="main-ch1-sloganSlide"
                style={{
                  transform: `translateY(-${count}%)`,
                  transition: titleTransition,
                  opacity: sloganOpacity,
                }}
              >
                <h2
                  style={
                    idx == 1
                      ? { left: `20%`, top: `-10%` }
                      : { left: `-20%`, top: `-5%` }
                  }
                >
                  {`${sloganbox[item]}`}
                </h2>
              </li>
            );
          })}
        </ul>

        <div className="btnBox">
          <button
            className="btn"
            id="btn1"
            style={
              count == 100 || count == 400
                ? { backgroundColor: `#e60012` }
                : { backgroundColor: "white" }
            }
            onClick={btn1Handle}
          ></button>
          <button
            className="btn"
            id="btn2"
            style={
              count == 200
                ? { backgroundColor: `#e60012` }
                : { backgroundColor: "white" }
            }
            onClick={btn2Handle}
          ></button>
          <button
            className="btn"
            id="btn3"
            style={
              count == 0 || count == 300
                ? { backgroundColor: `#e60012` }
                : { backgroundColor: "white" }
            }
            onClick={btn3Handle}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default MainCh1;
