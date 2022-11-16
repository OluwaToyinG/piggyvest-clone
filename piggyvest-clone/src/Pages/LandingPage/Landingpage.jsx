import React from "react";
import "./Landingpage.css";

import Header from "../../Components/Header/Header";
import Invest from "../../Components/Invest/Invest";
import Security from "../../Components/Security/Security";
import Savings from "../../Components/Savings/Savings";
import Investment from "../../Components/Investment/Investment";
import Interact from "../../Components/Interact/Interact";
import Customers from "../../Components/Customers/Customers";
import Featured from "../../Components/Featured/Featured";
import Footer from "../../Components/Footer/Footer";

const Landingpage = () => {
  return (
    <div className="landing">
      <Header />
      <Invest />
      <Security />
      <Savings />
      <Investment />
      <Interact />
      <Customers />
      <Featured />
      <Footer />
    </div>
  );
};

export default Landingpage;
