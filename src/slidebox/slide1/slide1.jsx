import React from "react";
import "./slide1.css";
function Slide1(props) {
  return (
    <div className="sl1-container">
      <div className="sl1-wrapper">
        <div className="sl1-box">
          <input type="radio" name="slide" id="sl1-c1" defaultChecked />
          <label htmlFor="sl1-c1" className="sl1-card">
            <div className="sl1-row">
              <div className="sl1-icon">1</div>
              <div className="sl1-description">
                <h4>Winter</h4>
                <p>Winter has so much to offer - creative activites</p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="sl1-c2" />
          <label htmlFor="sl1-c2" className="sl1-card">
            <div className="sl1-row">
              <div className="sl1-icon">2</div>
              <div className="sl1-description">
                <h4>Digital Technology</h4>
                <p>Gets better every day - stay tuned</p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="sl1-c3" />
          <label htmlFor="sl1-c3" className="sl1-card">
            <div className="sl1-row">
              <div className="sl1-icon">3</div>
              <div className="sl1-description">
                <h4>Globalization</h4>
                <p>Help people all over the world</p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="sl1-c4" />
          <label htmlFor="sl1-c4" className="sl1-card">
            <div className="sl1-row">
              <div className="sl1-icon">4</div>
              <div className="sl1-description">
                <h4>New Technologies</h4>
                <p>Space enginerring becomes more and more advanced</p>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Slide1;
