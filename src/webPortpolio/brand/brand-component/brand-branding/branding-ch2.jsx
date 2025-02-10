import React from "react";
import img from "../../img/ch2_img.jpg";
function BrandingCh2(props) {
  return (
    <div className="branding-ch2">
      <div className="branding-ch2-allbox">
        <div className="branding-ch2-imgbox">
          <img src={img} alt="img" />
        </div>
        <div className="branding-ch2-textbox">
          <div className="branding-ch2-numbox">02</div>
          <div>
            <div></div>
            Pascucci Korea Branch
          </div>
          <h1>And in 2001, Pascucci met SPC in Korea.</h1>
          <p>
            From the beginning, Korean Pascucci wanted to become a genuine brand
            that provides traditional products. Coffee is provided only from
            slow-roasted coffee beans that are meticulously managed, selected,
            and blended from the bean cultivation stage by the headquarters in
            Italy to preserve the original taste and aroma.
          </p>
          <button>more -</button>
        </div>
      </div>
    </div>
  );
}

export default BrandingCh2;
