import React, { useEffect, useState } from "react";
import BrandHeader from "./brand-component/brand-header";
import "./brand.css";
import BrandBranding from "./brand-component/brand-branding";
import BrandMedia from "./brand-component/brand-media";
import BrandMenu from "./brand-component/brand-menu";
import BrandLocation from "./brand-component/brand-location";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import BrandMain from "./brand-component/brand-main";

let path = window.location.pathname;
function Brand() {
  const [mainFColor, setMainFColor] = useState("white");
  const colorHandle = (e) => {
    setMainFColor(e);
  };

  useEffect(() => {
    if (path === "/web/brand/menu") {
      setMainFColor("black");
    } else if (path === "/web/brand/menu/beverage") {
      setMainFColor("black");
    } else if (path === "/web/brand/menu/food") {
      setMainFColor("black");
    } else if (path === "/web/brand/menu/gelato") {
      setMainFColor("black");
    } else if (path === "/web/brand/menu/md") {
      setMainFColor("black");
    }
  }, []);

  return (
    <div className="brand">
      <BrandHeader mainFColor={mainFColor} colorHandle={colorHandle} />
      <Routes>
        <Route path="/" element={<BrandMain />} />
        <Route path="/branding" element={<BrandBranding />} />
        <Route path="/menu/*" element={<BrandMenu />} />
        <Route path="/media" element={<BrandMedia />} />
        <Route path="/location" element={<BrandLocation />} />
      </Routes>
    </div>
  );
}
export default Brand;
