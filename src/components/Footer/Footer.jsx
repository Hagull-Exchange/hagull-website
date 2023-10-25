import React from "react";
import Logo from "../../assets/logo.png";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter, faFacebookF, faLinkedin, faInstagram  } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="row line">
          <div className="col-md-3">
            <img src={Logo} alt="Logo" className="logo" />
            <p className="pt-3">
              Hagull is your best currency exchange platform with you in mind. 
              A marketplace that empowers individuals worldwide to effortlessly
              buy, sell, and exchange currencies.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>

            <ul>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/career">Careers</Link></li>
                <li><Link to="/category">Category</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Company</h5>

            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="register">Register</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Get in Touch</h5>

            <ul>
                <li style={{display: 'flex'}}><span className="footer-icon"><FontAwesomeIcon icon={faPhone} /></span>+14817963012</li>
                <li  style={{display: 'flex'}}><span className="footer-icon"><FontAwesomeIcon icon={faEnvelope} /></span>hagullexchange@gmail.com</li>
                <li  style={{display: 'flex'}}><span className="footer-icon"><FontAwesomeIcon icon={faLocationDot} /></span>Delaware, United State of America</li>
            </ul>
          </div>
        </div>

        <div className="sub-footer">
          <ul className="social-media">
            <li><Link to="#"><FontAwesomeIcon icon={faXTwitter} /></Link></li>
            <li><Link to="#"><FontAwesomeIcon icon={faFacebookF} /></Link></li>
            <li><Link to="#"><FontAwesomeIcon icon={faLinkedin} /></Link></li>
            <li><Link to="#"><FontAwesomeIcon icon={faInstagram} /></Link></li>
          </ul>
          <p> &copy; 2023 Hagull. All rights reserved</p>
          <p className="globe">
          <span style={{fontSize: "22px", marginTop: '-5px'}}><FontAwesomeIcon icon={faGlobe} /></span> United States (English)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
