import React, { useEffect, useRef, useState } from "react";
import "./flyingtext.css";
import anime from "animejs/lib/anime.es.js";

let text1 = `" 내가 죽지 않는 동안에는 적이 감히 침범하지 못할 것이다. "`;
let text2 = `" 석자 되는 칼로 하늘에 맹세하니 산과 강이 떨고 한번 휘둘어 쓸어 버리니`;
let text3 = ` 피가 강산을 물들인다. "`;
let text4 = `" 이제 제게는 아직도 전선 12척이 있으니 죽을 힘을 내어 향거해 싸우면 `;
let text5 = `오히려 할 수 있는 일입니다. 비록 전선은 적지만 제가 죽지 않는 한 `;
let text6 = `적이 감히 우리를 업신여기지 못할 것입니다. "`;
let text7 = `" 병범에 이르기를 '죽고자 하면 살고 살려고 하면 죽는다' 라고 하였고,`;
let text8 = ` 또 한 사람이 길목을 지키면 천명도 두렵게 한다. "`;
let textList1 = text1.split("");
let textList2 = text2.split("");
let textList3 = text3.split("");
let textList4 = text4.split("");
let textList5 = text5.split("");
let textList6 = text6.split("");
let textList7 = text7.split("");
let textList8 = text8.split("");

function Flyingtext(props) {
  const animation = useRef(null);
  const [start, setStart] = useState("stop");

  useEffect(() => {
    if (start === "start") {
      animation.current = anime.timeline({
        targets: ".ft-text span",
        easing: "easeInOutExpo",
        loop: true,
      });
      animation.current
        .add({
          rotate: function () {
            return anime.random(-360, 360);
          },
          translateX: function () {
            return anime.random(-500, 500);
          },
          translateY: function () {
            return anime.random(-500, 500);
          },
          opacity: 0.5,
          duration: 5000,
          delay: anime.stagger(100),
        })
        .add({
          rotate: 0,
          translateX: 0,
          translateY: 0,
          opacity: 1,
          duration: 5000,

          delay: anime.stagger(20),
        });
    }
  }, [start]);

  const startHandle = () => {
    start === "stop" ? setStart("start") : setStart("stop");
  };

  return (
    <div className="ft-container">
      <section>
        <p className={`ft-text ${start}`} onClick={startHandle}>
          {textList1.map((item, idx) => {
            return <span key={idx}>{item === " " ? <span></span> : item}</span>;
          })}
          <br></br>
          <br></br>
          {textList2.map((item, idx) => {
            return <span key={idx}>{item === " " ? <span></span> : item}</span>;
          })}
          <br></br>
          {textList3.map((item, idx) => {
            return <span key={idx}>{item === " " ? <span></span> : item}</span>;
          })}
          <br></br>
          <br></br>
          {textList4.map((item, idx) => {
            return <span key={idx}>{item === " " ? <span></span> : item}</span>;
          })}

          <br></br>
          {textList5.map((item, idx) => {
            return <span key={idx}>{item === " " ? <span></span> : item}</span>;
          })}
          <br></br>
          {textList6.map((item, idx) => {
            return <span key={idx}>{item === " " ? <span></span> : item}</span>;
          })}
          <br></br>
          <br></br>
          {textList7.map((item, idx) => {
            return <span key={idx}>{item === " " ? <span></span> : item}</span>;
          })}
          <br></br>
          {textList8.map((item, idx) => {
            return <span key={idx}>{item === " " ? <span></span> : item}</span>;
          })}
        </p>
      </section>
    </div>
  );
}

export default Flyingtext;
