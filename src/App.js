import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Arrow from "./arrow";
import Home from "./home/home";

import ChangeCursor from "./cssSkill/changecursor/changeCursor";
import MenuAnimation from "./cssSkill/manuanimation/menuani";
import Isometricmenu from "./cssSkill/isometricmenu/isometricmenu";
import NeonText from "./cssSkill/neontext/neontext";
import Futuristiccard from "./cssSkill/futuristiccard/futuristiccard";
import Productcard from "./cssSkill/productcard/productcard";
import Animateobject from "./cssSkill/animateobject/animateobject";
import Clickpaint from "./cssSkill/clickpaint/clickpaint";
import Gallery from "./cssSkill/galleryHover/gallery";
import Radialmenu from "./cssSkill/radialmenu/radialmenu";
import Scrollevent from "./cssSkill/scrollevent/scrollevent";
import Cube3d from "./cssSkill/cube3d/cube3d";
import MediaIcon from "./cssSkill/mediaicon/mediaicon";
import Iconbg from "./cssSkill/iconbg/iconbg";
import Infinityloading from "./cssSkill/infinityloading/infinityloading";
import Randommove from "./cssSkill/randommove/randommove";
import Logintheme from "./cssSkill/logintheme/logintheme";
import Socialmediahover from "./cssSkill/SocialMediaHover/socialmediahover";
import Iphonedynamic from "./cssSkill/iphonedynamic/iphonedynamic";
import Gradientloading from "./cssSkill/gradientloading/gradientloading";
import Slidingnavigation from "./cssSkill/slidingnavigation/slidingnavigation";
import Hidebackground from "./cssSkill/hidebackground/hidebackground";
import Slideproductcard from "./cssSkill/slideproductcard/slideproductcard";
import Flyingtext from "./cssSkill/flyingtext/flyingtext";
import Iphone15pro from "./cssSkill/iphone15pro/iphone15pro";
import Climbobject from "./cssSkill/climbobject/climbobject";
import Light from "./cssSkill/light/light";
import Loaderanimate from "./cssSkill/loaderanimate/loaderanimate";
import MiniPortfolio1 from "./webPortpolio/miniportfolio1/miniportfolio1";
import Fullscreen from "./webPortpolio/fullscreen/fullscreen";
import Neonlogin from "./cssSkill/neonlogin/neonlogin";
import Bluetheme from "./webPortpolio/bluetheme/bluetheme";
import Slide1 from "./slidebox/slide1/slide1";
import Circletext from "./cssSkill/circletext/circletext";
import Slideshow3d from "./slidebox/slideshow3d/slideshow3d";
import FlashlightHover from "./cssSkill/FlashlightHover/FlashlightHover";
import RandomBackground from "./cssSkill/RandomBackground/RandomBackground";
import CanvasShapesRotate from "./cssSkill/CanvasShapesRotate/CanvasShapesRotate";
import RadialOctagonMenu from "./cssSkill/RadialOctagonMenu/RadialOctagonMenu";
import Sliderotation3d from "./slidebox/sliderotation3d/sliderotation3d";
import MiniPortFolio2 from "./webPortpolio/miniportfolio2/miniporfolio2";
import Japan from "./webPortpolio/japan/japan";
import PhotoSlide3d from "./slidebox/photoSlide3d/photoSlide3d";
import WebCube from "./webPortpolio/webcube/webcube";
import OutDoor from "./webPortpolio/outdoors/outdoor";
import Brand from "./webPortpolio/brand/brand";
function App() {
  const [left, setLeft] = useState("");
  const [top, setTop] = useState("");

  const mouseMoveHandle = (e) => {
    setLeft(e.clientX + "px");
    setTop(e.clientY + "px");
  };
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div
        className="App"
        onMouseMove={(e) => {
          mouseMoveHandle(e);
        }}
      >
        <Routes>
          <Route path="/" element={<Home left={left} top={top} />} />
          <Route path="/css/changecursor" element={<ChangeCursor />} />
          <Route path="/css/menuanimation" element={<MenuAnimation />} />
          <Route path="/css/slideproductcard" element={<Slideproductcard />} />
          <Route path="/css/isometricmenu" element={<Isometricmenu />} />
          <Route path="/css/randommove" element={<Randommove />} />
          <Route path="/css/neontext" element={<NeonText />} />
          <Route path="/css/logintheme" element={<Logintheme />} />
          <Route path="/css/futuristiccard" element={<Futuristiccard />} />
          <Route path="/css/productcard" element={<Productcard />} />
          <Route path="/css/animateobject" element={<Animateobject />} />
          <Route path="/css/clickpaint" element={<Clickpaint />} />
          <Route path="/css/galleryhover" element={<Gallery />} />
          <Route path="/css/radialmenu" element={<Radialmenu />} />
          <Route path="/css/scrollevent" element={<Scrollevent />} />
          <Route path="/css/cube3d" element={<Cube3d />} />
          <Route path="/css/mediaicon" element={<MediaIcon />} />
          <Route path="/css/iconbackground" element={<Iconbg />} />
          <Route path="/css/infinityloading" element={<Infinityloading />} />
          <Route path="/css/socialmediahover" element={<Socialmediahover />} />
          <Route path="/css/iphonedynamic" element={<Iphonedynamic />} />
          <Route path="/css/gradientloading" element={<Gradientloading />} />
          <Route
            path="/css/slidingnavigation"
            element={<Slidingnavigation />}
          />
          <Route path="/css/hidebackground" element={<Hidebackground />} />
          <Route path="/css/flyingtext" element={<Flyingtext />} />
          <Route path="/css/iphone15pro" element={<Iphone15pro />} />
          <Route path="/css/climbobject" element={<Climbobject />} />
          <Route path="/css/light" element={<Light />} />
          <Route path="/css/loaderanimate" element={<Loaderanimate />} />
          <Route path="/css/circletext" element={<Circletext />} />
          <Route path="/css/flashlighthover" element={<FlashlightHover />} />
          <Route path="/css/randombackground" element={<RandomBackground />} />
          <Route path="/css/neonlogin" element={<Neonlogin />} />
          <Route
            path="/css/radialoctagonmenu"
            element={<RadialOctagonMenu />}
          />
          <Route
            path="/css/CanvasShapesRotate"
            element={<CanvasShapesRotate />}
          />

          <Route path="/web/miniportfolio1" element={<MiniPortfolio1 />} />
          <Route path="/web/fullscreen" element={<Fullscreen />} />
          <Route path="/web/miniportfolio2" element={<MiniPortFolio2 />} />
          <Route path="/web/bluetheme" element={<Bluetheme />} />
          <Route path="/web/japan" element={<Japan />} />
          <Route path="/web/webcube" element={<WebCube />} />
          <Route path="/web/outdoor" element={<OutDoor />} />
          <Route path="/web/brand/*" element={<Brand />} />

          <Route path="/slide/slide1" element={<Slide1 />} />
          <Route path="/slide/slideshow3d" element={<Slideshow3d />} />
          <Route path="/slide/sliderotation3d" element={<Sliderotation3d />} />
          <Route path="/slide/photoslide3d" element={<PhotoSlide3d />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
