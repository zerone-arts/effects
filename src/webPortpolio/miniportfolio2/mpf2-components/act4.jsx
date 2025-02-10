import React from "react";
import "../css/act4.css";
import list1 from "../img/act4-list1.jpg";
import list2 from "../img/act4-list2.jpg";
import list3 from "../img/act4-list3.png";
function Act4(props) {
  return (
    <div className="act4-container">
      <div className="act4-container">
        <div className="act4-titlebox">
          <h2>Lorem.</h2>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div className="act4-profilebox">
          <div className="act4-profilebg"></div>
        </div>
        <div className="act4-listbox">
          <div className="act4-list" id="act4-list-1">
            <div>
              <img src={list1} alt="list1"></img>
            </div>
            <h3>Title</h3>
            <p>
              Lorem, ipsum dolor sit amet <br />
              consectetur adipisicing.
            </p>
          </div>
          <div className="act4-list" id="act4-list-2">
            <div>
              <img src={list2} alt="list2"></img>
            </div>
            <h3>Title</h3>
            <p>
              Lorem, ipsum dolor sit amet <br />
              consectetur adipisicing.
            </p>
          </div>
          <div className="act4-list" id="act4-list-3">
            <div>
              <img src={list3} alt="list3"></img>
            </div>
            <h3>Title</h3>
            <p>
              Lorem, ipsum dolor sit amet <br />
              consectetur adipisicing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Act4;
