import React from "react";
import "./neonlogin.css";
import { Link, useLocation } from "react-router-dom";

let bg = Array(300).fill("");
function Neonlogin(props) {
  return (
    <div className="nl-container">
      <section>
        {bg.map((item, idx) => {
          return <span key={idx}></span>;
        })}

        <div className="nl-signin">
          <div className="nl-content">
            <div className="nl-titleBx">
              <h2>Sign In</h2>
              <Link to="/" className="nl-link">
                Main
              </Link>
            </div>
            <div className="nl-form">
              <div className="nl-inputBx">
                <input type="text" required />
                <i>Username</i>
              </div>
              <div className="nl-inputBx">
                <input type="password" required />
                <i>Password</i>
              </div>
              <div className="nl-links">
                <a href="#">Forget password</a>
                <a href="#">Signup</a>
              </div>
              <div className="nl-inputBx">
                <input type="submit" value={"Login"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Neonlogin;
