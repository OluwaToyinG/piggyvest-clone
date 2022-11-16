import React from "react";
import "./Featured.css";
import Guardian from "../../images/guardian.png";
import TechCrunch from "../../images/techcrunch.png";
import Techpoint from "../../images/techpoint.png";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="row">
          <div className="left">
            <h4>As featured in</h4>
          </div>
          <div className="right">
            <Link to={"/"} className="first-link">
              <div className="box">
                <img
                  src={Techpoint}
                  alt="techpoint"
                  width={"137px"}
                  height={"37px"}
                />
              </div>
            </Link>
            <Link to={"/"} className="first-link">
              <div className="box">
                <img
                  src={Guardian}
                  alt="guardian"
                  width={"160px"}
                  height={"24px"}
                />
              </div>
            </Link>
            <Link to={"/"} className="first-link">
              <div className="box">
                <img
                  src={TechCrunch}
                  alt="techcrunch"
                  width={"156px"}
                  height={"27px"}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
