import { useState, useRef } from "react";
import img from "../../img/ch1_img.jpeg";

function BrandingCh1({}) {
  return (
    <div className="branding-ch1">
      <div className="branding-ch1-allbox">
        <div className="branding-ch1-textbox">
          <div className="branding-ch1-numbox">01</div>
          <div>
            <div></div>Beginning of Pascucci
          </div>
          <h1>In 1883, the story of Pascucci began.</h1>
          <p>
            In Italy, the home of espresso and the birthplace of modern coffee,
            there lived Pascucci and his father, who were passionate about
            coffee. Through generations of coffee research, they were finally
            able to create Pascucci's unique coffee with a new taste and aroma.
          </p>
          <button>more -</button>
        </div>
        <div className="branding-ch1-imgbox">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default BrandingCh1;
