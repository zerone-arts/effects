import React from "react";
import "./slideshow3d.css";
import img1 from "./spider1.jpeg";
import img2 from "./spider2.jpeg";
import img3 from "./spider3.jpeg";
import img4 from "./spider4.jpeg";
import img5 from "./spider5.jpeg";
import img6 from "./spider6.jpeg";
import img7 from "./spider7.jpeg";
import img8 from "./spider8.jpeg";
import img9 from "./spider9.jpeg";
import img10 from "./spider10.jpeg";

let slideList = [
  { img: img1, no: "01", name: "Spider1" },
  { img: img2, no: "02", name: "Spider2" },
  { img: img3, no: "03", name: "Spider3" },
  { img: img4, no: "04", name: "Spider4" },
  { img: img5, no: "05", name: "Spider5" },
  { img: img6, no: "06", name: "Spider6" },
  { img: img7, no: "07", name: "Spider7" },
  { img: img8, no: "08", name: "Spider8" },
  { img: img9, no: "09", name: "Spider9" },
  { img: img10, no: "10", name: "Spider10" },
];

function Slideshow3d(props) {
  return (
    <div className="ss3-container">
      <div className="ss3-slideshow">
        {slideList.map((item, idx) => {
          return (
            <div
              className="ss3-slide"
              key={idx}
              style={{ animationDelay: `${idx * 2}s` }}
            >
              <h2>
                {item.no}
                {/* <span>{item.name}</span> */}
              </h2>
              <img src={item.img}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slideshow3d;
