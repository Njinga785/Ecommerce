import React from 'react'; 
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">MustLaure</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">SignIn</Nav.Link>
      <Nav.Link href="#features">SignUp</Nav.Link>
      </Nav>
    
  </Navbar>
    )
}

export default NavBar