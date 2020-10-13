import React, { Component } from 'react'
// import Navbar from 'react-bootstrap/Navbar' 
import Nav from 'react-bootstrap/Nav'
// import { NavLink } from 'react-router-dom'

export class SignInLink extends Component {
    render() {
        return (

            <Nav>
  <Nav.Item>
    <Nav.Link href="/">ProductList</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/create">AddProducts</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/">SignOut</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/"> ML</Nav.Link>
  </Nav.Item>
</Nav>

        )
    }
}

export default SignInLink
