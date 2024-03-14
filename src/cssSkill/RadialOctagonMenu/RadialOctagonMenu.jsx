import React, { useState } from "react";
import "../../cssSkill/RadialOctagonMenu/RadialOctagonMenu.css";
function RadialOctagonMenu(props) {
  const [toggle, setToggle] = useState("");
  const [hover, setHover] = useState("");
  let romList = [
    {
      icon: <ion-icon name="home-outline"></ion-icon>,
      color: "#ff2972",
    },
    {
      icon: <ion-icon name="person-outline"></ion-icon>,
      color: "#fee800",
    },
    {
      icon: <ion-icon name="settings-outline"></ion-icon>,
      color: "#04fc43",
    },
    {
      icon: <ion-icon name="mail-outline"></ion-icon>,
      color: "#fe00f1",
    },
    {
      icon: <ion-icon name="key-outline"></ion-icon>,
      color: "#00b0fe",
    },
    {
      icon: <ion-icon name="game-controller-outline"></ion-icon>,
      color: "#a529ff",
    },
    {
      icon: <ion-icon name="camera-outline"></ion-icon>,
      color: "#01bdab",
    },
    {
      icon: <ion-icon name="image-outline"></ion-icon>,
      color: "#fea600",
    },
  ];

  const hoverhandle = (e, idx) => {
    setHover(idx);
  };

  return (
    <div className="rom-container">
      <ul className={`rom-menu ${toggle}`}>
        <div
          className={`rom-menuToggle`}
          onClick={() => (toggle === "" ? setToggle("active") : setToggle(""))}
        >
          <ion-icon name="add-outline"></ion-icon>
        </div>
        {romList.map((item, idx) => {
          return (
            <li
              key={idx}
              style={
                toggle === ""
                  ? {
                      transform: `rotate(0deg) translateX(100px)`,
                      transitionDelay: `calc(0.1s * ${idx})`,
                    }
                  : {
                      transform: `rotate(calc(360deg/8*${idx}))`,
                    }
              }
              onMouseOver={(e) => hoverhandle(e, idx)}
              onMouseLeave={() => setHover("")}
            >
              <a
                href="#"
                style={
                  toggle === ""
                    ? {
                        transform: `rotate(calc(360deg/-8*${idx}))`,
                        color: "transparent",
                      }
                    : {
                        transform: `rotate(calc(360deg/-8*${idx}))`,
                        color: item.color,
                      }
                }
              >
                <div
                  style={
                    toggle === ""
                      ? {
                          background: item.color,
                          transform: `rotate(${idx * 90}deg) translate(0,25px)`,
                          border: `2px solid ${item.color}`,
                        }
                      : hover === idx
                      ? {
                          background: item.color,
                          color: "#2f363e",
                          boxShadow: `0 0 10px ${item.color},0 0 20px ${item.color},0 0 30px ${item.color}`,
                          transform: `rotate(${
                            idx * 90
                          }deg) translate(0px,0px)`,
                          border: `2px solid ${item.color}`,
                        }
                      : {
                          background: `#2f363e`,
                          transform: `rotate(${
                            idx * 90
                          }deg) translate(0px,0px)`,
                          border: `2px solid ${item.color}`,
                        }
                  }
                ></div>
                <div
                  style={
                    toggle === ""
                      ? {
                          left: "50px",
                          width: "20px",
                          background: item.color,
                          transform: `rotate(calc(${idx} * 0deg)) translate(15px,0px)`,
                        }
                      : {
                          left: "10px",
                          width: "40px",
                          background: item.color,
                          transform: `rotate(calc(${idx} * 45deg)) translate(50px,0px)`,
                        }
                  }
                ></div>
                {item.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RadialOctagonMenu;
