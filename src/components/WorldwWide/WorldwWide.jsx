import React from "react";
import "./WorldwWide.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import GlobalImg from "../../assets/Globe.png";
import UkBoy from "../../assets/ukboy.png";
import Europe from "../../assets/europe.png";
import USgirl from "../../assets/usgirl.png";
import USFlag from "../../assets/usa.png";
import Indiaboy from "../../assets/indiaboy.png";
import IndiaFlag from "../../assets/india.png";
import Mama from "../../assets/mama.jpeg";
import NigerianFlag from "../../assets/nigerianflag.png";
import BrazilGirl from "../../assets/brazilgirl.jpeg";
import BrazilFlag from "../../assets/brazilflag.jpeg";
import { Link } from "react-router-dom";

const WorldwWide = () => {
  return (
    <div className="worldwide-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="flags">
              <ul className="flag-content">
                <li>
                  <img
                    src={UkBoy}
                    alt="UkBoy"
                    className="UkBoy"
                    style={{
                      position: "absolute",
                      right: "10%",
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      bottom: "-269px",
                    }}
                  />
                  <span>
                    <img
                      src={Europe}
                      alt="Europe"
                      style={{
                        position: "absolute",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        right: "8%",
                        marginTop: "231px",
                      }}
                    />
                  </span>
                </li>
                <li>
                  <img
                    src={USgirl}
                    alt="USgirl"
                    className="USgirl"
                    style={{
                      position: "absolute",
                      right: "28%",
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      bottom: "-120px",
                    }}
                  />
                  <span>
                    <img
                      src={USFlag}
                      alt="UKFlag"
                      style={{
                        position: "absolute",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        right: "26%",
                        marginTop: "80px",
                      }}
                    />
                  </span>
                </li>
                <li>
                  <img
                    src={Indiaboy}
                    alt="Indiaboy"
                    className="Indiaboy"
                    style={{
                      position: "absolute",
                      right: "55%",
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      bottom: "-157px",
                    }}
                  />
                  <span>
                    <img
                      src={IndiaFlag}
                      alt="IndiaFlag"
                      style={{
                        position: "absolute",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        right: "53%",
                        marginTop: "120px",
                      }}
                    />
                  </span>
                </li>
                <li>
                  <img
                    src={Mama}
                    alt="Mama"
                    className="Mama"
                    style={{
                      position: "absolute",
                      right: "84%",
                      width: "70px",
                      height: "75px",
                      borderRadius: "50%",
                      bottom: "-120px",
                    }}
                  />
                  <span>
                    <img
                      src={NigerianFlag}
                      alt="NigerianFlag"
                      style={{
                        position: "absolute",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        right: "82%",
                        marginTop: "82px",
                      }}
                    />
                  </span>
                </li>
                <li>
                  <img
                    src={BrazilGirl}
                    alt="BrazilGirl"
                    className="BrazilGirl"
                    style={{
                      position: "absolute",
                      left: "-6%",
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      bottom: "-269px",
                    }}
                  />
                  <span>
                    <img
                      src={BrazilFlag}
                      alt="BrazilFlag"
                      style={{
                        position: "absolute",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        left: "4%",
                        marginTop: "231px",
                      }}
                    />
                  </span>
                </li>
              </ul>
            </div>
            <div className="global-image">
              <img src={GlobalImg} alt="GlobalImg" />
            </div>
          </div>

          <div className="col-md-6 world-wid-text">
            <h1>Do you want to experience the freedom of currency trading?</h1>

            <p>
              Join our community of traders and embark on a journey of limitless
              possibilities. Take control of your financial transactions, access
              a wide range of currencies, and benefit from competitive rates.
            </p>

            <button>
              <Link to="/category">
                Get Started <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldwWide;
