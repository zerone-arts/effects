import React, { useEffect, useState } from "react";
import "./RandomBackground.css";

function RandomBackground(props) {
  const [rbArr, setRbArr] = useState(new Array(300).fill(""));

  useEffect(() => {
    const timer = setInterval(() => {
      rbArr[Math.floor(Math.random() * rbArr.length)] = "active";
      setRbArr([...rbArr]);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="rb-container">
      <section className="rb-wrapper">
        {rbArr.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`rb-box ${item}`}
              style={
                item === "active"
                  ? {
                      color: "#0f0",
                      filter: `hue-rotate(${idx * 10}deg)`,
                      textShadow: `0 0 5px #0f0, 0 0 20px #0f0, 0 0 25px #0f0`,
                    }
                  : {}
              }
            ></div>
          );
        })}
      </section>
    </div>
  );
}

export default RandomBackground;
