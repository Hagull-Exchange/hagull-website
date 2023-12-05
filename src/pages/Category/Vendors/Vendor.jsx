import React, { useState, useEffect } from "react";
import "./Vendors.css";
import ManCrossedArm from "../../../assets/man-with-arms-crossed.png"; // replace with actual paths
import MiddleAged from "../../../assets/middle-aged-cheerful-dark-skinned-male-with-shining-smile.png";
import PortraitAfrican from "../../../assets/portrait-african-american-man 1.png";
import Button from "../../../components/Button/Button";
import CloseUpMan from "../../../assets/close-up-portrait.png";
import CloseUpShot from "../../../assets/close-up-shot.png";
import CloseUpYoung from "../../../assets/close-up-young.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const cardsData = [
  {
    vendorName: "Felix Joe",
    image: ManCrossedArm,
    pricePercentage: "100%",
    minQuatity: "$ 140.89",
    maxQuatity: "$ 140.80",
    sellingPrice: "$ 105.89",
  },
  {
    vendorName: "Kachi Erugo",
    image: MiddleAged,
    pricePercentage: "80%",
    minQuatity: "$ 140.89",
    maxQuatity: "$ 140.80",
    sellingPrice: "$ 105.89",
  },
  {
    vendorName: "Shedrack Erugo",
    image: PortraitAfrican,
    pricePercentage: "95%",
    minQuatity: "$ 140.89",
    maxQuatity: "$ 140.80",
    sellingPrice: "$ 105.89",
  },
  {
    vendorName: "Jane Smith",
    image: CloseUpMan, // replace with actual path
    pricePercentage: "90%",
    minQuatity: "$ 140.89",
    maxQuatity: "$ 140.80",
    sellingPrice: "$ 110.89",
  },
  {
    vendorName: "John Doe",
    image: CloseUpShot, // replace with actual path
    pricePercentage: "85%",
    minQuatity: "$ 140.89",
    maxQuatity: "$ 140.80",
    sellingPrice: "$ 100.89",
  },
  {
    vendorName: "Alice Cooper",
    image: CloseUpYoung, // replace with actual path
    pricePercentage: "75%",
    minQuatity: "$ 140.89",
    maxQuatity: "$ 140.80",
    sellingPrice: "$ 120.89",
  },
  {
    vendorName: "Bob Marley",
    image: ManCrossedArm, // replace with actual path
    pricePercentage: "70%",
    minQuatity: "$ 140.89",
    maxQuatity: "$ 140.80",
    sellingPrice: "$ 130.89",
  },
  {
    vendorName: "Charlie Chaplin",
    image: PortraitAfrican, // replace with actual path
    pricePercentage: "65%",
    minQuatity: "$ 140.89",
    maxQuatity: "$ 140.80",
    sellingPrice: "$ 95.89",
  },
  {
    vendorName: "Daisy Ridley",
    image: CloseUpYoung, // replace with actual path
    pricePercentage: "60%",
    minQuatity: "$ 140.89",
    maxQuatity: "$ 140.80",
    sellingPrice: "$ 125.89",
  },
  {
    vendorName: "Eddie Murphy",
    image: CloseUpShot, // replace with actual path
    pricePercentage: "55%",
    minQuatity: "$ 140.89",
    maxQuatity: "$ 140.80",
    sellingPrice: "$ 135.89",
  },
  {
    vendorName: "Frank Sinatra",
    image: CloseUpMan, // replace with actual path
    pricePercentage: "50%",
    minQuatity: "$ 140.89",
    maxQuatity: "$ 140.80",
    sellingPrice: "$ 90.89",
  },
  {
    vendorName: "Grace Kelly",
    image: MiddleAged, // replace with actual path
    pricePercentage: "45%",
    minQuatity: "$ 140.89",
    maxQuatity: "$ 140.80",
    sellingPrice: "$ 140.89",
  },
];

const Vendor = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCards, setFilteredCards] = useState(cardsData);
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const resetFilters = () => {
    setSearchQuery(""); // reset the search query
    setSelectedCurrency(null); // reset the selected currency
  };

  useEffect(() => {
    let filtered = cardsData.filter(
      (card) =>
        (card.vendorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          card.sellingPrice
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          card.sellingPrice
            .toLowerCase()
            .includes(searchQuery.toLowerCase())) &&
        (!selectedCurrency || card.sellingPrice.includes(selectedCurrency))
    );
    setFilteredCards(filtered);
  }, [searchQuery, selectedCurrency]);

  return (
    <>
      <div className="filter-header container">
        <div className="input-group mb-3 position-relative">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            placeholder="Search for sellers, currencies and price."
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
        <div className="filters">
          <ul>
            {/* <li>
              <button type="button">All</button>
            </li>
            <li>
              <button type="button">Popular</button>
            </li>
            <li>
              <button type="button">Trending</button>
            </li> */}
            <li>
              <button type="button" onClick={resetFilters}>
                Reset Filter
              </button>
            </li>
            <li>
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                className="currency-dropdown"
              >
                <option value="">Currencies</option>
                <option value="ETH">ETH</option>
                <option value="BTC">BTC</option>
                <option value="$">USD</option>
                <option value="€">EUR</option>
                <option value="₿">Bitcoin</option>
                <option value="₦">Naira</option>
                <option value="R">Rand</option>
              </select>
            </li>
          </ul>
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
                  <h5 className="tittle mb-3">Vendor's Rates</h5>
                    <p className="percentage">Success: {card.pricePercentage}</p>
                  </div>
                  <div className="price">
                    {/* <p className="currency-price">{card.currencyPrice}</p> */}
                    <p className="selling-price">Selling rate: {card.sellingPrice}</p>
                    <p className="selling-price">Min. quatity: {card.minQuatity}</p>
                    <p className="selling-price">Max. quatity: {card.maxQuatity}</p>
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
