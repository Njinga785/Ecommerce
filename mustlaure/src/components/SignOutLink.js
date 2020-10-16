import React, { Component } from 'react' 
import Nav from 'react-bootstrap/Nav'

export class SignOutLink extends Component {
    render() {
        return (
            <div>
            <Nav>
            <Nav.Item>
              <Nav.Link href="/">SignUP</Nav.Link>
              <Nav.Link href="/">SignIn</Nav.Link>
            </Nav.Item>
            
          </Nav>
          
            </div>
        )
    }
}

export default SignOutLink
