import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Button from "../Button/Button";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header container">
      <img src={Logo} alt="Logo" className="logo" />
      <ul className="header-menu">
        <li><NavLink exact to="/"  activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/category"  activeClassName="active">Category</NavLink></li>
        <li><NavLink to="/about"  activeClassName="active">About us</NavLink></li>
        <li><NavLink to="contact"  activeClassName="active">Contact us</NavLink></li>
      </ul>

      <div className="button-group">
        <Button text="Log in" to="/login" variant="secondary" />
        <Button text="Register" to="/register" variant="primary" />
      </div>
    </div>
  );
};

export default Header;
