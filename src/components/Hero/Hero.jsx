import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import Currency from "../../assets/currency-exchange.png";
import Businessmen from "../../assets/businessmen.png";

const Hero = () => {
  return (
    <div className="hero container-fluid">
      <div className="background-image row">
      <div className="col-12 text-center">
          <h1>
            Unlock the World of
            <span> Currency Exchange</span> Connect, Trade, and Hagull.
          </h1>
          <p>
            A marketplace that empowers individuals worldwide to effortlessly buy,
            sell, and exchange currencies.
          </p>
          <button className="centered-button">
            <Link to="/category">Explore Marketplace</Link>
          </button>
        </div>
      </div>
      <div className="floating-image">
        <img src={Currency} alt="Currency" className="cuurency" />
      </div>
      <div className="centered-image">
        <img src={Businessmen} alt="businessmen" />
      </div>
    </div>
  );
};

export default Hero;
