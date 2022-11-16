import React from "react";
import "./Investment.css";
import { Link } from "react-router-dom";
import Phone from "../../images/phone.png";
import Circle from "../../images/circleinvest.svg";
import Dot from "../../images/dotinvest.svg";

const Investment = () => {
  return (
    <div className="investment">
      <div className="container">
        <div className="row">
          <div className="left">
            <div className="box">
              <img src={Phone} alt="phone" className="phone" />
              <img src={Circle} alt="circle" className="circle" />
              <img src={Dot} alt="dot" className="dot" />
            </div>
          </div>
          <div className="right">
            <div className="content">
              <p className="tag">Up To 25% Returns</p>
              <h2>Access investment opportunities</h2>
              <p className="text">
                Invest securely and confidently on the go. Grow your money
                confidently by investing in pre-vetted investment opportunities.
              </p>
              <Link to={"/"}>Learn more about Investments {">"}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investment;
