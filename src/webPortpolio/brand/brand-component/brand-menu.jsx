import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import BrandMenuCoffee from "./brand-menu/brand-menu-coffee";
import BrandMenuBeverage from "./brand-menu/brand-menu-beverage";
import BrandMenuGelato from "./brand-menu/brand-menu-gelato";
import BrandMenuFood from "./brand-menu/brand-menu-food";
import BrandMenuMd from "./brand-menu/brand-menu-md";
import BrandMenuHeader from "./brand-menu/brand-menu-header";

function BrandMenu(props) {
  return (
    <div className="brand-Menu">
      <BrandMenuHeader />
      <div className="brand-menu-line"></div>
      <div className="brand-menu-container">
        <Routes>
          <Route path="/*" element={<BrandMenuCoffee />} />
          <Route path="/Beverage" element={<BrandMenuBeverage />} />
          <Route path="/Gelato" element={<BrandMenuGelato />} />
          <Route path="/Food" element={<BrandMenuFood />} />
          <Route path="/Md" element={<BrandMenuMd />} />
        </Routes>
      </div>
    </div>
  );
}

export default BrandMenu;
