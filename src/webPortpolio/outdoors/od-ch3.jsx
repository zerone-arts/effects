import React, { useEffect, useRef, useState } from "react";
import star from "./img/star2.png";

function OdCh3() {
  const txt = `Leave Right Now`;
  const [text, setText] = useState(``);

  const countRef = useRef(0);

  const typingHandle = () => {
    let interval = setInterval(() => {
      countRef.current = countRef.current + 1;
      setText((prevText) => prevText + txt[countRef.current - 1]);

      if (countRef.current === txt.length) {
        clearInterval(interval);
      }
    }, 100);
  };
  // setTimeout(() => {
  //   if (countRef.current === txt.length) {
  //   }
  // }, 3000);
  setTimeout(() => {
    if (countRef.current === txt.length) {
      countRef.current = 0;
      setText("");
      console.log(countRef.current);
    }
  }, 5000);

  return (
    <div className="od-ch3">
      <div className="bgGradient"></div>
      <div className="ch3Bg">
        <button className="star" onClick={typingHandle}>
          <img src={star} alt="star" />
        </button>
        <div className="typing">
          <span>{text}</span>
        </div>
      </div>
      <div className="bgGradientright"></div>
      <div className="bgGradientleft"></div>
      <div className="ch3Footer">
        <div className="ch3Left">
          <div className="ch3-circle">C</div>
          <h3>THE GREAT OUTDOORS. ALL right reserved.</h3>
        </div>
        <p className="ch3Line">|</p>
        <div className="ch3Right">
          <h3>ABOUT</h3>
          <h3>EXPLORE</h3>
          <h3>JOURNAL</h3>
          <h3>SEARCH</h3>
        </div>
      </div>
    </div>
  );
}

export default OdCh3;
