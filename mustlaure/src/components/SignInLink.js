import React, { Component } from 'react'
// import Navbar from 'react-bootstrap/Navbar' 
import Nav from 'react-bootstrap/Nav' 
import {connect} from 'react-redux' 
import Button from 'react-bootstrap/Button';
import {signOut} from './store/actions/actionUser'
// import { NavLink } from 'react-router-dom'

export class SignInLink extends Component { 
  delete =() => {
    this.props.signOut()
  }

    render() {
        return (

            <Nav>
            <Nav.Item>
    <Nav.Link href="/signup">SignUp</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/signin">SignIn</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/">ProductList</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/create">AddProducts</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/signup">SignOut</Nav.Link> 
    <Button onClick={this.delete} variant="danger">Danger</Button>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/"> ML</Nav.Link>
  </Nav.Item>
</Nav>

        )
    }
} 
const mapDispatchToProps = {
  signOut
}

export default connect(mapDispatchToProps) (SignInLink)
