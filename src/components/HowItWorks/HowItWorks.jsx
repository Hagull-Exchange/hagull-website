import React from "react";
import Search from "../../assets/search.png";
import Wallet from "../../assets/wallet.png";
import "./HowItWorks.css";

const OnlineVendors = () => {
  return (
    <div className="text-center mt-5 pt-4 pb-4">
      <div className="header-container">
        <h4 className="small-header">How it works</h4>
        <h1 className="big-header">
          Step-by-step guide explaining the process of buying or selling
          currencies on the marketplace
        </h1>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8 col-lg-8 col-xl-8 p-4">
            <div
              className="card border-0 shadow p-4"
              style={{ backgroundColor: "#32C1CC" }}
            >
              <div className="card-head">
                <div className="head-wrapper">
                  <h1
                    className="mb-2 text-start fw-bold display-4"
                    style={{ color: "#01294E" }}
                  >
                    SEARCH AND DISCOVER
                  </h1>
                  <p className="text-start pt-3">
                    Search for specific currencies to discover available
                    listings. Utilize search filters, browse categories, or view
                    featured currencies to find options that match your needs.
                  </p>
                </div>
                <img src={Search} alt="Search" className="float-end w-42 p-2" />
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 p-4">
            <div
              className="card border-0 shadow p-4 text-white"
              style={{ backgroundColor: "#EB8207" }}
            >
              <h1 className="mb-2 text-start fw-bold display-4">
                EVALUATE AND COMPARE
              </h1>
              <p className="text-start">
                Once you find currency listings of interest evaluate the details
                provided by sellers. Then compare different listings to
                determine the best fit for your requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 col-lg-4 col-xl-4 p-4">
            <div
              className="card border-0 shadow p-4 text-light"
              style={{ backgroundColor: "#7C45EB" }}
            >
              <h1 className="mb-2 text-start fw-bold display-4">
                ENGAGE AND NEGOTITATE
              </h1>
              <p className="text-start">
                Initiate communication with sellers to discuss the terms of the
                transaction. Use the platform's messaging or chat system to ask
                questions, negotiate rates, and clarify any concerns.
              </p>
            </div>
          </div>
          <div className="col-md-8 col-lg-8 col-xl-8 p-4">
            <div
              className="card border-0 shadow p-4"
              style={{ backgroundColor: "#F48CF4" }}
            >
              <div className="card-head">
                <div className="head-wrapper">
                  <h1
                    className="mb-2 text-start fw-bold display-4"
                    style={{ color: "#01294E" }}
                  >
                    TRANSACT AND EXCHANGE
                  </h1>
                  <p className="text-start pt-3">
                    After agreeing on the terms, proceed with the transaction.
                    Buyers make the payment using the specified method, while
                    sellers ensure the secure delivery or transfer of the
                    currency.
                  </p>
                </div>
                <img src={Wallet} alt="Wallet" className="float-end w-42" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineVendors;
