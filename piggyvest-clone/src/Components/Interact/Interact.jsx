import React from "react";
import "./Interact.css";
import ArrowCircle from "../../images/arrowcircle.svg";
import { Link } from "react-router-dom";

const Interact = () => {
  return (
    <div className="interact">
      <div className="interactContainer">
        <div className="left">
          <div className="content">
            <div className="top">
              <h2>Meet the saver of the month!</h2>
              <p>
                Every month, we shine a spotlight on one saver, asking them
                questions about their savings culture and how the product is
                specifically helping them shape how they spend and save for
                future responsibilities.
              </p>
            </div>
            <Link className="bottom">
              <img src={ArrowCircle} alt="arrow" className="arrow" />
              Meet Tito
            </Link>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Interact;
