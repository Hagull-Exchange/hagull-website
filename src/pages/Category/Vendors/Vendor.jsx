import React, { useState, useEffect } from "react";
import "./Vendors.css";
import ManCrossedArm from "../../../assets/man-with-arms-crossed.png"; // replace with actual paths
import MiddleAged from "../../../assets/middle-aged-cheerful-dark-skinned-male-with-shining-smile.png";
import PortraitAfrican from "../../../assets/portrait-african-american-man 1.png";
import Button from "../../../components/Button/Button";
import CloseUpMan from "../../../assets/close-up-portrait.png";
import CloseUpShot from "../../../assets/close-up-shot.png";
import CloseUpYoung from "../../../assets/close-up-young.png";

const cardsData = [
  {
    vendorName: "Felix Joe",
    image: ManCrossedArm,
    pricePercentage: "100%",
    currencyPrice: "0.0625 ETH",
    sellingPrice: "$ 105.89",
  },
  {
    vendorName: "Kachi Erugo",
    image: MiddleAged,
    pricePercentage: "80%",
    currencyPrice: "0.0625 BTC",
    sellingPrice: "$ 105.89",
  },
  {
    vendorName: "Shedrack Erugo",
    image: PortraitAfrican,
    pricePercentage: "95%",
    currencyPrice: "0.0625 ETH",
    sellingPrice: "$ 105.89",
  },
  {
    vendorName: "Jane Smith",
    image: CloseUpMan, // replace with actual path
    pricePercentage: "90%",
    currencyPrice: "0.0650 ETH",
    sellingPrice: "$ 110.89",
  },
  {
    vendorName: "John Doe",
    image: CloseUpShot, // replace with actual path
    pricePercentage: "85%",
    currencyPrice: "0.0600 BTC",
    sellingPrice: "$ 100.89",
  },
  {
    vendorName: "Alice Cooper",
    image: CloseUpYoung, // replace with actual path
    pricePercentage: "75%",
    currencyPrice: "0.0700 ETH",
    sellingPrice: "$ 120.89",
  },
  {
    vendorName: "Bob Marley",
    image: ManCrossedArm, // replace with actual path
    pricePercentage: "70%",
    currencyPrice: "0.0800 BTC",
    sellingPrice: "$ 130.89",
  },
  {
    vendorName: "Charlie Chaplin",
    image: PortraitAfrican, // replace with actual path
    pricePercentage: "65%",
    currencyPrice: "0.0550 ETH",
    sellingPrice: "$ 95.89",
  },
  {
    vendorName: "Daisy Ridley",
    image: CloseUpYoung, // replace with actual path
    pricePercentage: "60%",
    currencyPrice: "0.0750 BTC",
    sellingPrice: "$ 125.89",
  },
  {
    vendorName: "Eddie Murphy",
    image: CloseUpShot, // replace with actual path
    pricePercentage: "55%",
    currencyPrice: "0.0850 ETH",
    sellingPrice: "$ 135.89",
  },
  {
    vendorName: "Frank Sinatra",
    image: CloseUpMan, // replace with actual path
    pricePercentage: "50%",
    currencyPrice: "0.0500 BTC",
    sellingPrice: "$ 90.89",
  },
  {
    vendorName: "Grace Kelly",
    image: MiddleAged, // replace with actual path
    pricePercentage: "45%",
    currencyPrice: "0.0900 ETH",
    sellingPrice: "$ 140.89",
  },
];

const Vendor = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCards, setFilteredCards] = useState(cardsData);

  useEffect(() => {
    const filtered = cardsData.filter(
      (card) =>
        card.vendorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.currencyPrice.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.sellingPrice.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredCards(filtered);
  }, [searchQuery]);

  return (
    <>
      <div className="filter-header container">
        <div className="input-group mb-5 position-relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-control search-input"
          />
          <button
            className="clear-btn"
            type="button"
            onClick={() => setSearchQuery("")}
          >
            Clear
          </button>
        </div>
      </div>
      <hr />
      <div className="container my-5">
        <div className="row justify-content-center g-3">
          {filteredCards.map((card, index) => (
            <div className="col-md-4" key={index}>
              <div className="card">
                <div className="top-overlay">
                  <span className="vendor-name">{card.vendorName}</span>
                  <select className="custom-dropdown">
                    <option>$</option>
                    <option>€</option>
                    <option>₿</option>
                    <option>₦</option>
                    <option>R</option>
                  </select>
                </div>
                <img src={card.image} className="card-img-top" alt="Card" />
                <div className="card-body">
                  <div className="des-title">
                    <span className="card-title">Current price</span>
                    <span className="percentage">{card.pricePercentage}</span>
                  </div>
                  <div className="price">
                    <p className="currency-price">{card.currencyPrice}</p>
                    <p className="selling-price">{card.sellingPrice}</p>
                  </div>
                  <Button text="Hagull" to="/register" variant="primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Vendor;
