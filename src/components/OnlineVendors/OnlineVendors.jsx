import React from "react";
import "./OnlineVendors.css";
import ManCrossedArm from "../../assets/man-with-arms-crossed.png";
import MiddleAged from "../../assets/middle-aged-cheerful-dark-skinned-male-with-shining-smile.png";
import PortraitAfrican from "../../assets/portrait-african-american-man 1.png";
import Button from "../Button/Button";

const OnlineVendors = () => {
  return (
    <section className="onlineVendor">
      <div className="header-container">
        <h4 className="small-header">Top Online Vendors</h4>
        <h1 className="big-header">
          Discover A Curated Selection Of Top Online Vendors In The Currency
          Trading Industry.
        </h1>
      </div>
      <div className="container my-5">
        <div className="row justify-content-center g-3">
          <div className="col-md-4">
            <div className="card">
              <div className="top-overlay">
                <span className="vendor-name">Felix Joe</span>
                <select className="custom-dropdown">
                  <option>$</option>
                  <option>€</option>
                  <option>₿</option>
                  <option>₦</option>
                  <option>R</option>
                </select>
              </div>
              <img
                src={ManCrossedArm}
                className="card-img-top"
                alt="ManCrossedArm"
              />
              <div class="card-body">
                <div className="des-title">
                <span className="card-title">Current price</span>
                <span className="percentage">100%</span>
                </div>
                <div className="price">
                 <p className="currency-price">0.0625 ETH</p>
                 <p className="selling-price">$ 105.89</p>
                </div>
                <Button text="Hagull" to="/register" variant="primary" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
            <div className="top-overlay">
                <span className="vendor-name">Kachi Erugo</span>
                <select className="custom-dropdown">
                  <option>$</option>
                  <option>€</option>
                  <option>₿</option>
                  <option>₦</option>
                  <option>R</option>
                </select>
              </div>
              <img src={MiddleAged} class="card-img-top" alt="MiddleAged" />
              <div class="card-body">
              <div className="des-title">
                <span className="card-title">Current price</span>
                <span className="percentage">80%</span>
                </div>
                <div className="price">
                 <p className="currency-price">0.0625 BTC</p>
                 <p className="selling-price">$ 105.89</p>
                </div>
                <Button text="Hagull" to="/register" variant="primary" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
            <div className="top-overlay">
                <span className="vendor-name">Shedrack Erugo</span>
                <select className="custom-dropdown">
                  <option>$</option>
                  <option>€</option>
                  <option>₿</option>
                  <option>₦</option>
                  <option>R</option>
                </select>
              </div>
              <img
                src={PortraitAfrican}
                class="card-img-top"
                alt="PortraitAfrican"
              />
              <div class="card-body">
              <div className="des-title">
                <span className="card-title">Current price</span>
                <span className="percentage">95%</span>
                </div>
                <div className="price">
                 <p className="currency-price">0.0625 ETH</p>
                 <p className="selling-price">$ 105.89</p>
                </div>
                <Button text="Hagull" to="/register" variant="primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineVendors;
