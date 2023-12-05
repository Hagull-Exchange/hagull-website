import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
// import Currency from "../../assets/currency-exchange.png";
// import MoneyExchange from "../../assets/moneyexchnage.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <div className="hero">
      <div className="background-image">
        <div className="container">
          <div className="row justify-content-center g-3">
            <div className="col-md-8">
              <h1 className="pt-5">
                Unlock the World of Currency Exchange
                <span style={{ color: "#0197B2" }}> Connect,</span>
                <span style={{ color: "rgb(234, 130, 7)" }}> Trade, </span> and&nbsp; 
                <span className="gradient-text">
                   Hagull
                </span>
                .
                {/* Open up a world of currency exchange: Connect, Trade, and Hagull */}
              </h1>
              <p className="pt-3">
                A marketplace that empowers individuals worldwide to
                effortlessly buy, sell, and exchange currencies.
              </p>
              <button className="explore-button mt-3">
                <Link to="/category">Get Started</Link>
              </button>

              {/* <div className="download">
            <Link to="#"><button></button></Link>
            <Link to="#"><button></button></Link>
            </div> */}

              <div className="download">
                <Link className="apple" to="#">
                  <FontAwesomeIcon
                    icon={faGooglePlay}
                    style={{ color: "white", fontSize: "30px" }}
                  />
                  <div className="buttonText">
                    <p className="buttonSmallText">Get it on</p>
                    <p className="buttonLargeText">Google Play</p>
                  </div>
                </Link>
                <Link className="apple" to="#">
                  <FontAwesomeIcon
                    icon={faApple}
                    style={{ color: "white", fontSize: "30px" }}
                  />
                  <div class="buttonText">
                    <p class="buttonSmallText2">Download on the</p>
                    <p class="buttonLargeText">App Store</p>
                  </div>
                </Link>
              </div>
              <p style={{ color: "#ea8207", fontWeight: "700" }}>
                Coming soon....
              </p>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
