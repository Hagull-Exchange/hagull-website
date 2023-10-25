import React from "react";
import "./Category.css";
import Vendors from "./Vendors/Vendor";
import Footer from "../../components/Footer/Footer"

const Category = () => {
  return (
    <div className="category">
      <div className="catergory-hero pt-3">
        <div className="container">
          <div className="catergory-background-image">
            <h1 className="text-center">Explore Our Vendor Category</h1>
            <p className="pt-3 text-center">
              Welcome to our Currency Categories page, where you can explore a
              wide range of currencies available for buying and selling on our
              marketplace.
            </p>
          </div>
        </div>
      </div>
      <Vendors />
      <Footer />
    </div>
  );
};

export default Category;
