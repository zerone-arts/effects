import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./portfolio1.css";
import user from "./img/user.JPG";
import bg1 from "./img/bg1.jpeg";
import icon1 from "./img/icon1.png";
import icon2 from "./img/icon2.png";
import icon3 from "./img/icon3.png";
import icon4 from "./img/icon4.png";
import icon5 from "./img/icon5.png";
import icon6 from "./img/icon6.png";

import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import img4 from "./img/img4.png";
import img5 from "./img/img5.png";
import img6 from "./img/img6.png";
import img7 from "./img/img7.png";
import img8 from "./img/img8.png";
import img9 from "./img/img9.jpg";

import user1 from "./img/user1.jpeg";
import user2 from "./img/user2.jpeg";
import user3 from "./img/user3.jpeg";
import user4 from "./img/user4.jpeg";

let servicesList = [
  { icon: icon1, title: "Web Design" },
  { icon: icon2, title: "Web Development" },
  { icon: icon3, title: "Android Apps" },
  { icon: icon4, title: "Photography" },
  { icon: icon5, title: "Content Writing" },
  { icon: icon6, title: "Video Editing" },
];

let projectList = [
  { img: img1, title: "Project 01" },
  { img: img2, title: "Project 02" },
  { img: img3, title: "Project 03" },
  { img: img4, title: "Project 04" },
  { img: img5, title: "Project 05" },
  { img: img6, title: "Project 06" },
  { img: img7, title: "Project 07" },
  { img: img8, title: "Project 08" },
  { img: img9, title: "Project 09" },
];

let tstList = [
  { img: user1, title: "Website Designer" },
  { img: user2, title: "Website Designer" },
  { img: user3, title: "Website Designer" },
  { img: user4, title: "Website Designer" },
];

function Portfolio1(props) {
  const [toggle, setToggle] = useState("");
  const [theme, setTheme] = useState("");

  const menuHandle = () => {
    toggle === "" ? setToggle("active") : setToggle("");
  };

  const scrollHandle = () => {
    setToggle("");
  };

  const themeHandle = () => {
    theme === "" ? setTheme("dark") : setTheme("");
  };
  return (
    <div className={`p1-container ${theme}`}>
      <div className="p1-allBox">
        <div className={`p1-navigation ${toggle}`}>
          <ul>
            <li onClick={scrollHandle}>
              <a href="#p1-banner">Home</a>
            </li>
            <li onClick={scrollHandle}>
              <a href="#p1-about">About</a>
            </li>
            <li onClick={scrollHandle}>
              <a href="#p1-services">Services</a>
            </li>
            <li onClick={scrollHandle}>
              <a href="#p1-project">Project</a>
            </li>
            <li onClick={scrollHandle}>
              <a href="#p1-tsimonials">Testimonials</a>
            </li>
            <li onClick={scrollHandle}>
              <a href="#p1-contact">Contact</a>
            </li>
            <li className="p1-back">
              <Link to="/">Back to main</Link>
            </li>
          </ul>
          <div className="p1-themeswitch" onClick={themeHandle}></div>
        </div>
        <div className={`p1-main ${toggle}`}>
          <div className={`p1-topbar ${toggle}`}>
            <a href="#" className="p1-logo">
              Portfolio
            </a>
            <div className={`p1-toggle ${toggle}`} onClick={menuHandle}>
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
          <section className="p1-banner" id="p1-banner">
            <div className="p1-content">
              <div className="p1-imgBx">
                <img src={user} />
              </div>
              <h3>Andrew Chunsik</h3>
              <p>I`m a Creative Front End Web Developer.</p>
              <a href="#" className="p1-btn">
                Download My CV
              </a>
              <ul className="p1-socialMedia">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section className="p1-about p1-adjust" id="p1-about">
            <div className="p1-title">
              <h2>About Me</h2>
            </div>
            <div className="p1-content">
              <div className="p1-textBox">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Pariatur adipisci voluptatum animi esse numquam nemo?
                  Perferendis fuga odit magnam, totam ipsum vel similique maxime
                  iste ducimus cum incidunt veritatis, cupiditate autem
                  obcaecati commodi exercitationem error porro, praesentium
                  accusamus. Iste non tempora ipsa suscipit debitis eaque ex
                  minima, voluptates culpa asperiores nesciunt rem facilis harum
                  minus, sed repellat consequuntur. Numquam, consequuntur fuga
                  error perferendis, nisi fugit itaque, dolor nesciunt nam sequi
                  necessitatibus ad aut nostrum! Autem quasi natus eius nesciunt
                  quae? Provident rem quas dolor consequuntur aperiam eveniet
                  nemo.
                  <br />
                  <br /> laudantium ducimus alias. Voluptatibus, reprehenderit
                  suscipit adipisci ea nisi vel dolore cupiditate vero eos quos
                  consectetur vitae id dolores quae rem! Iste tempora sapiente
                  dolorem reiciendis error nam iure, nesciunt tempore veniam
                  quod aperiam quo voluptate odit nihil repellat minus illo amet
                  eos dolores debitis incidunt numquam voluptates
                  necessitatibus. Quis optio,
                </p>
              </div>
              <div className="p1-imgBx">
                <img src={bg1} alt="aboutBg" />
              </div>
            </div>
          </section>

          <section className="p1-services p1-adjust" id="p1-services">
            <div className="p1-title">
              <h2>Our Services</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, saepe.
              </p>
            </div>
            <div className="p1-content">
              {servicesList.map((item, idx) => {
                return (
                  <div className="p1-serviceBox" key={idx}>
                    <img src={item.icon} alt={item} />
                    <h2>{item.title}</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolores officiis possimus, quas pariatur distinctio libero
                      quaerat nostrum.
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="p1-project p1-adjust" id="p1-project">
            <div className="p1-title">
              <h2>Recent Work</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, saepe.
              </p>
            </div>
            <div className="p1-content">
              {projectList.map((item, idx) => {
                return (
                  <div className="p1-workBx" key={idx}>
                    <div className="p1-imgBx">
                      <img src={item.img} alt={item.title} />
                    </div>
                    <div className="p1-textBx">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="p1-tstimonials p1-adjust" id="p1-tsimonials">
            <div className="p1-title">
              <h2>Testimonials</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, saepe.
              </p>
            </div>
            <div className="p1-content">
              {tstList.map((item, idx) => {
                return (
                  <div className="p1-testimonialsBox" key={idx}>
                    <div className="p1-imgBx">
                      <img src={item.img} alt={item.title} />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ab, quis ipsa! Optio ducimus odit illo pariatur temporibus
                      id nostrum, ex officia totam maiores, mollitia laborum
                      praesentium quis! Quaerat, officia excepturi.
                    </p>
                    <h4>
                      Somemone Famouse
                      <br />
                      <span>Webssite Designer</span>
                    </h4>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="p1-contact p1-adjust" id="p1-contact">
            <div className="p1-title">
              <h2>Let's Say Hi</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, saepe.
              </p>
            </div>
            <div className="p1-contactForm">
              <div className="p1-row">
                <input type="text" name="" placeholder="First Name" />
                <input type="text" name="" placeholder="Last Name" />
              </div>
              <div className="p1-row">
                <input type="text" name="" placeholder="Email Address" />
                <input type="text" name="" placeholder="Mobile No." />
              </div>
              <div className="p1-row2">
                <textarea placeholder="Message"></textarea>
              </div>
              <div className="p1-row2">
                <input type="submit" value="Send" />
              </div>
            </div>
          </section>
          <div className="p1-copyright">
            <p>Copyright ⓒ Online Tutorials. All Right Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio1;
