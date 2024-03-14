import React, { useEffect, useState } from "react";
import "./light.css";

function Light(props) {
  const [left, setLeft] = useState("");
  const [top, setTop] = useState("");

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setLeft(e.clientX + "px");
      setTop(e.clientY + "px");
    });
  }, []);
  return (
    <div className="l-container">
      <section>
        <h2>Light</h2>
      </section>
      <div
        className="l-light"
        style={{
          background: `radial-gradient(
          circle at ${left} ${top},
          transparent 10%,
          rgba(0, 0, 0, 0.97) 20%
        )`,
        }}
      ></div>
    </div>
  );
}

export default Light;
