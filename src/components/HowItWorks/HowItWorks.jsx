import React from "react";
import "./HowItWorks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBalanceScale,
  faSms,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";

const HowItWorks = () => {
  return (
    <div className="HowItWorks-wrapper mt-5 pt-4 pb-4">
      <div className="header-container">
        <h1 className="text-center small-header ">How it works</h1>
        <h6 class="thirdRightHeader text-center">
          Four easy steps to begin your currency trading journey.
        </h6>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 class="sectionHeaderText">
                  <span>
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                  SEARCH AND DISCOVER
                </h3>
                <p class="thirdSectionSmallText">
                  Search for specific currencies to discover available listings.
                  Utilize search filters, browse categories, or view featured
                  currencies to find options that match your needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 class="sectionHeaderText">
                  <span>
                    <FontAwesomeIcon icon={faBalanceScale} />
                  </span>
                  EVALUATE AND COMPARE
                </h3>
                <p class="thirdSectionSmallText">
                  {" "}
                  Once you find currency listings of interest evaluate the
                  details provided by sellers. Then compare different listings
                  to determine the best fit for your requirements.
                </p>
              </div>
            </div>
            </div>
            </div>
            <div className="row mt-5">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h3 class="sectionHeaderText">
                    <span>
                      <FontAwesomeIcon icon={faSms} />
                    </span>
                    ENGAGE AND NEGOTITATE
                  </h3>
                  <p class="thirdSectionSmallText">
                    {" "}
                    Initiate communication with sellers to discuss the terms of
                    the transaction using platform's messaging app to ask
                    questions, negotiate rates, and clarify any concerns.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h3 class="sectionHeaderText">
                    <span>
                      <FontAwesomeIcon icon={faExchangeAlt} />
                    </span>
                    TRANSACT AND EXCHANGE
                  </h3>
                  <p class="thirdSectionSmallText">
                    {" "}
                    After agreeing on the terms, proceed with the transaction.
                    Buyers make the payment using the specified method, while
                    sellers ensure the secure delivery or transfer of the
                    currency.
                  </p>
                </div>
              </div>
            </div>
            </div>
        
      </div>
    </div>
  );
};

export default HowItWorks;
