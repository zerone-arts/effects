import React from "react";
import "./bluetheme.css";
import { Link, useLocation } from "react-router-dom";
function Bluetheme(props) {
  return (
    <div className="bt-container">
      <span className="bt-home-imgHover"></span>
      <header className="bt-header">
        <Link to="/" className="bt-logo">
          Main.
        </Link>

        <nav className="bt-navbar">
          <a href="#" className="bt-active">
            Home
          </a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <section className="bt-home">
        <div className="bt-home-content">
          <h1>Hi, I'm Andrew Chunsik</h1>
          <h3>FrontEnd Developer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, velit
            commodi et eligendi tenetur rem quas dolor voluptates doloremque
            corporis est, optio doloribus? Deserunt quae atque nulla maxime eum
            facere nam, facilis error consequuntur reiciendis.
          </p>
          <div className="bt-btn-box">
            <a href="#">Hire Me</a>
            <a href="#">Let's Talk</a>
          </div>
        </div>

        <div className="bt-home-sci">
          <a href="#">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Bluetheme;
