import React, { useState } from "react";
import BrandMenuCoffeeItalian from "./brand-menu-coffee/brand-menu-coffee-italian";
import BrandMenuCoffeeHot from "./brand-menu-coffee/brand-menu-coffee-hot";
import BrandMenuCoffeeIce from "./brand-menu-coffee/brand-menu-coffee-ice";
import BrandMenuCoffeeCold from "./brand-menu-coffee/brand-menu-coffee-cold";
let coffeList = [
  "Italian Coffee",
  "Coffee Variation (Hot)",
  "Coffee Variation (Ice)",
  "Cold Brew",
];

function BrandMenuCoffee(props) {
  const [list, setList] = useState("Italian Coffee");
  const [listHeight, setListHeight] = useState(`0px`);

  const ListSelectHandle = (item) => {
    setList(item);
    setListHeight(`0px`);
  };

  const ListBtnHandle = () => {
    listHeight === `50px` ? setListHeight(`0px`) : setListHeight(`50px`);
  };

  const ChoiseHandle = () => {
    if (list === "Italian Coffee") {
      return <BrandMenuCoffeeItalian />;
    } else if (list === "Coffee Variation (Hot)") {
      return <BrandMenuCoffeeHot />;
    } else if (list === "Coffee Variation (Ice)") {
      return <BrandMenuCoffeeIce />;
    } else if (list === "Cold Brew") {
      return <BrandMenuCoffeeCold />;
    }
  };

  return (
    <div className="brand-menu-coffee">
      <div className="brand-menu-coffee-select">
        {list}
        <span className="material-symbols-outlined" onClick={ListBtnHandle}>
          {listHeight !== `50px` ? "expand_more" : "expand_less"}
        </span>
      </div>

      <div className="brand-menu-coffe-choise">{ChoiseHandle()}</div>
      <ul className="brand-menu-coffee-list" style={{ height: listHeight }}>
        {coffeList.map((item, idx) => {
          return (
            <li
              key={idx}
              onClick={() => ListSelectHandle(item)}
              style={item === list ? { color: "black" } : { color: "gray" }}
            >
              {item !== list ? item : ""}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BrandMenuCoffee;
