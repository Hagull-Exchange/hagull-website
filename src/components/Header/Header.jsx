import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Button from "../Button/Button";
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="header" style={{padding: '0'}}>
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src={Logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-auto">
            <Nav.Link as={NavLink} exact to="/" activeClassName="active">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/category" activeClassName="active">Category</Nav.Link>
            <Nav.Link as={NavLink} to="/about" activeClassName="active">About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" activeClassName="active">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/login">
              <Button text="Log in" variant="secondary" />
            </Nav.Link>
            <Nav.Link as={NavLink} to="/register">
              <Button text="Get Started" variant="primary" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

