import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./photoslide3d.css";
// import required modules
import { EffectCoverflow, Autoplay } from "swiper/modules";

import model1 from "./img/model1.png";
import model2 from "./img/model2.jpg";
import model3 from "./img/model3.png";
import model4 from "./img/model4.jpeg";
import model5 from "./img/model5.jpeg";
import model6 from "./img/model6.jpeg";
import model7 from "./img/model7.jpeg";
import model8 from "./img/model8.jpeg";
import model9 from "./img/model9.jpeg";

let models = [
  { img: model1, name: "Andrew" },
  { img: model2, name: "Amber" },
  { img: model3, name: "Noah" },
  { img: model4, name: "Aspyn" },
  { img: model5, name: "Lucas" },
  { img: model6, name: "Camila" },
  { img: model7, name: "Asher" },
  { img: model8, name: "Diana" },
  { img: model9, name: "Ellie" },
];

export default function PhotoSlide3d() {
  const [opacity, setOpacity] = useState(1);
  const [clickIdx, setClickIdx] = useState(null);

  const clickHandle = (e, idx) => {
    setClickIdx(idx);
    idx === clickIdx ? setOpacity(0.5) : setOpacity(1);
    if (clickIdx !== null) {
      setClickIdx(null);
    }
  };

  return (
    <div className="ps3-main-container">
      <div className="ps3-slide-box">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={4}
          // autoplay={{
          //   delay: 4000,
          //   disableOnInteraction: false,
          // }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[Autoplay, EffectCoverflow]}
          className="mySwiper"
        >
          {models.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div
                  key={idx}
                  className="ps3-slide"
                  onClick={(e) => clickHandle(e, idx)}
                >
                  <img
                    src={item.img}
                    className={idx === clickIdx ? `ps3-img active` : "ps3-img"}
                  />
                  <div className={idx === clickIdx ? `explain up` : "explain"}>
                    <p>{item.name}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
