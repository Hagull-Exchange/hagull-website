import React, { useState } from "react";
import { motion } from "framer-motion";
import Bitcoin from "../../assets/Bitcoin.webp";
import Ethereum from "../../assets/Ethereum.webp";
import Binance from "../../assets/binance.png"
import Solana from "../../assets/Solana.png"
import Shiba from "../../assets/SHIBA.webp"
import Litecoin from "../../assets/Litecoin.webp"
import Tether from "../../assets/Tether.webp"
import Ripple from "../../assets/XRP.webp"
import USDC from "../../assets/USDC.png"
import Doge from "../../assets/doge.png"
import Cardano from "../../assets/Cardano.png"
import Chainlink from "../../assets/chainlink.webp"
import "./Currencies.css";

// const tabVariants = {
//     hidden: { opacity: 0, y: "-10vh" },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
// };

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Africa");

  const continents = {
    Africa: ["🇳🇬", "🇿🇦", "🇪🇬", "🇲🇦", "🇧🇯", "🇨🇲", "🇬🇭", "🇰🇪"],
    Asia: ["🇯🇵", "🇨🇳", "🇰🇷", "🇮🇳"],
    Europe: ["🇪🇺", "🇬🇧", "🇨🇭", "🇸🇪"],
    "North America": ["🇺🇸", "🇨🇦", "🇲🇽"],
    "South America": ["🇧🇷", "🇦🇷", "🇨🇴"],
    "Oceania": ["🇦🇺", "🇳🇿"],
};


  return (
    <div className="currency-wrapper">
    <div className="container">
      <h1 className="text-center">Currency Listing</h1>
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
          <ul className="buttons mb-5">
            <li><img src={Bitcoin} alt="Bitcoin" /></li>
            <li><img src={Ethereum} alt="Ethereum" /></li>
            <li><img src={Binance} alt="Binance" /></li>
            <li><img src={Solana} alt="Solana" /></li>
            <li><img src={Shiba} alt="Shiba" /></li>
            <li><img src={Litecoin} alt="Litecoin" /></li>
            <li><img src={Tether} alt="Tether" /></li>
            <li><img src={Ripple} alt="Ripple" /></li>
            <li><img src={USDC} alt="USDC" /></li>
            <li><img src={Doge} alt="Doge" /></li>
            <li><img src={Cardano} alt="Cardano" /></li>
            <li><img src={Chainlink} alt="Chainlink" /></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Tabs;
