import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
// import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
import SignInLink from "./SignInLink";

class NavBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="#home">
          MustLaure
        </Navbar.Brand>

        <SignInLink />
      </Navbar>
    );
  }
}

export default NavBar;
