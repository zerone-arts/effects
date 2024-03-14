import React from "react";
import "./slideproductcard.css";
import img from "./shoe.png";
function Slideproductcard(props) {
  return (
    <div className="spc-container">
      <div className="spc-card">
        <div className="spc-imgBx">
          <img src={img} alt="shoes" />
        </div>
        <div className="spc-details">
          <h3>
            Converse Chuck 70 High
            <br />
            <span> Men's Shoes</span>
          </h3>
          <h4>Product Detials</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            delectus.
          </p>
          <h4>Size</h4>
          <ul className="spc-size">
            <li>240</li>
            <li>250</li>
            <li>260</li>
            <li>270</li>
            <li>280</li>
          </ul>
          <div className="spc-group">
            <h2>
              <sup>$</sup>199<small>.99</small>{" "}
            </h2>
            <a href="#">Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slideproductcard;
