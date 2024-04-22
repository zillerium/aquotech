import React, { useState, useContext } from "react";
import Link from 'next/link';
import { Navbar, Nav, NavLink, NavDropdown } from 'react-bootstrap';
import { WalletContext } from "../lib/WalletContext";

const Navigation = () => {
const { userAddress, setUserAddress } = useContext(WalletContext);
  const changeSkin = (colorScheme) => {
    document.body.className = colorScheme;
  };

  return (
    <Navbar className="navbar-custom" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link as={Link} href="/" passHref>
	  <img src="/aquotechlogo.png" alt="Logo" className="logo-img" />
	  </Nav.Link>
        <Nav className="mr-auto">
          <Nav.Link as={Link} href="/" passHref>Home</Nav.Link>
          <Nav.Link as={Link} href="/Methods" passHref>Methods</Nav.Link>
          <NavDropdown title="About Us" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} href="/GettingStarted" passHref>About Aquotech</NavDropdown.Item>
          </NavDropdown>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

