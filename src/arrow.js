import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Arrow({}) {
  const [display, setDisplay] = useState("flex");
  const location = useLocation();

  let currentPath = "";
  useEffect(() => {
    if (currentPath === location.pathname) window.location.reload();
    if (location.pathname === "/" || location.pathname.includes("/web")) {
      setDisplay("none");
    } else {
      setDisplay("flex");
    }
  }, [location]);

  return (
    <div className="arrow-container" style={{ display: display }}>
      <Link to="/" className="arrow-box">
        <ion-icon
          name="arrow-back-outline"
          style={{ color: "#fff" }}
        ></ion-icon>
      </Link>
    </div>
  );
}

export default Arrow;
