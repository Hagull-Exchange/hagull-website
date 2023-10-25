import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Currencies.css";

// const tabVariants = {
//     hidden: { opacity: 0, y: "-10vh" },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
// };

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Africa");

  const continents = {
    Africa: ["NGN", "ZAR", "EGP", "MAD", "XOF", "XAF", "CEDIS", "KES"],
    Asia: ["JPY", "CNY", "KRW", "INR", "KRW"],
    Europe: ["EUR", "GBP", "CHF", "SEK"],
    "North America": ["USD", "CAD", "MXN"],
    "South America": ["BRL", "ARS", "COP"],
    "Australia/Oceania": ["AUD", "NZD"],
  };

  return (
    <div className="currency-wrapper py-3">
    <div className="container">
      <h1 className="text-center mt-5">Currency Listing</h1>
      <p className="text-center mt-5 mb-3 fw-bold">Fiat Currencies</p>
      <div className="tabs">
        <div className="tabs-container">
          <div className="tab-headers">
            {Object.keys(continents).map((continent) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={continent}
                className={`tab-header ${
                  activeTab === continent ? "active" : ""
                }`}
                onClick={() => setActiveTab(continent)}
              >
                {continent}
              </motion.div>
            ))}
          </div>

          <div className="tab-content">
            {continents[activeTab].map((currency) => (
              <button key={currency}>{currency}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="cryptocurrency mt-5">
        <div className="container">
        <p className="text-center mb-3 fw-bold">Crypto Currencies</p>
          <div className="buttons mb-5">
            <button>BTC</button>
            <button>ETH</button>
            <button>BNB</button>
            <button>ADA</button>
            <button>SOL</button>
            <button>XRP</button>
            <button>DOT</button>
            <button>LTC</button>
            <button>DOGE</button>
            <button>USDTC</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Tabs;
