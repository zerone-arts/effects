import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./home-web.css";
let list = [
  { icon: "P1", name: "Portfolio1" },
  { icon: "FS", name: "FullScreen" },
  { icon: "NL", name: "NeonLogin" },
  { icon: "BT", name: "BlueTheme" },
];
function HomeWeb({ titleHandle }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    titleHandle(title);
  }, [title]);

  const OverHandle = (e, item) => {
    setTitle(item.name);
  };
  const OutHandle = () => {
    setTitle("");
  };
  return (
    <div className="home-web">
      <ul>
        {list.map((item, idx) => {
          return item.icon !== "" ? (
            <li
              key={idx}
              onMouseOver={(e) => OverHandle(e, item)}
              onMouseLeave={OutHandle}
            >
              <Link to={`/web/${item.name.toLowerCase()}`}>{item.icon}</Link>
            </li>
          ) : (
            <div key={idx} style={{ display: "none" }}></div>
          );
        })}
      </ul>
    </div>
  );
}

export default HomeWeb;
