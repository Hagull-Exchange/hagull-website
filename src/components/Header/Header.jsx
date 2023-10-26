import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prevState) => !prevState);

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  return (
    <div className="header container">
      <img src={Logo} alt="Logo" className="logo" />
      <button className="hamburger" onClick={toggleSidebar}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12H21M3 6H21H3ZM3 18H21H3Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <motion.div
        className="menu-wrapper"
        initial="closed"
        animate={isSidebarOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <ul className="header-menu">
          <li>
            <NavLink
              exact
              to="/"
              activeClassName="active"
              onClick={toggleSidebar}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category"
              activeClassName="active"
              onClick={toggleSidebar}
            >
              Category
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeClassName="active"
              onClick={toggleSidebar}
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeClassName="active"
              onClick={toggleSidebar}
            >
              Contact us
            </NavLink>
          </li>
        </ul>

        <div className="button-group">
          <Button text="Log in" to="/login" variant="secondary" />
          <Button text="Register" to="/register" variant="primary" />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
