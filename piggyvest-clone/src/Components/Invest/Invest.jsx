import React from "react";
import "./Invest.css";
import { Link } from "react-router-dom";
import Investify from "../../images/investify.png";
import Rent from "../../images/rent.png";
import BoxBG from "../../images/rex-bg.png";
import Woman from "../../images/woman.png";
import Cross from "../../images/cross.svg";
import Circle from "../../images/circle.svg";
import Dot from "../../images/dot.svg";
import Apple from "../../images/apple.svg";
import Google from "../../images/google.svg";

const Invest = () => {
  return (
    <div className="invest">
      <div className="container">
        <div className="row">
          <div className="left">
            <div className="text">
              <h1>The Better Way to Save & Invest.</h1>
              <p>
                PiggyVest helps over 4 million customers achieve their financial
                goals by helping them save and invest with ease.
              </p>
            </div>
            <div className="box">
              <Link to={"/register"} className="btn btn-signup">
                Create free account
              </Link>
              <div className="download">
                <Link to={"/"} className="btn-download">
                  <img
                    src={Apple}
                    alt="download-apple"
                    width="18"
                    height="22"
                  />{" "}
                  Get on Iphone
                </Link>
                <Link to={"/"} className="btn-download">
                  <img
                    src={Google}
                    alt="download-apple"
                    width="24"
                    height="24"
                  />{" "}
                  Get on Android
                </Link>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="box">
              <img src={BoxBG} alt="rectangle" className="rectangle" />
              <img src={Woman} alt="woman-pic" className="womanpic" />
              <img src={Rent} alt="rest-logo" className="rent" />
              <img src={Investify} alt="gggs" className="investify" />
              <img src={Circle} alt="circle" className="circle" />
              <img src={Cross} alt="cross" className="cross" />
              <img src={Dot} alt="dot" className="dot" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;
