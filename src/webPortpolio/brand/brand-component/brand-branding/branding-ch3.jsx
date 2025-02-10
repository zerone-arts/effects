import React from "react";
import img from "../../img/ch3_img.jpeg";
function BrandingCh3(props) {
  return (
    <div className="branding-ch3">
      <div className="branding-ch3-allbox">
        <div className="branding-ch3-textbox">
          <div className="branding-ch3-numbox">03</div>
          <div>
            <div></div>Korea branch in the future
          </div>
          <h1>For the next 19 years, 150 years... Korean Pascucci</h1>
          <p>
            Thanks to the love of domestic customers, Pascucci has successfully
            settled in the Korean market. Now, beyond introducing authentic
            Italian espresso to customers who love Pascucci, we want to become a
            coffee shop with the originality of Korean Pascucci.
          </p>
          <button>more -</button>
        </div>
        <div className="branding-ch3-imgbox">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default BrandingCh3;
