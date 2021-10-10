import React from 'react';
import { Link } from 'gatsby';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from '../assets/brand-name.png';
import '../styles/main.scss';

const Header = () => (
  <header className="navigation">
    <Navbar
      className="navBar"
      fixed="top"
      collapseOnSelect
      expand="xl"
      variant="dark"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand>
          <Link to="/" activeClassName="active">
            <img
              src={logo}
              width="auto"
              height="auto"
              alt="Logo - Nazwa firmy"
            />
            <span className="visually-hidden">(current)</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>NavItem</Nav>
          <Nav>NavItem</Nav>
          <Nav>NavItem</Nav>
          <Nav>NavItem</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);

export default Header;
