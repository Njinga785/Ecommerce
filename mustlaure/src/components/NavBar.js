import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav' 
import SignInLink from './SignInLink'
// import SignOutLink from './SignOutLink'

class NavBar extends Component {
    render() {
        return ( 
           
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">MustLaure</Navbar.Brand>
                
                    <SignInLink/> 
                    
            
            </Navbar> 
           
           
        )
    }
}

export default NavBar