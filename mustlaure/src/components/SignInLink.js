import React, { Component } from 'react'
// import Navbar from 'react-bootstrap/Navbar' 
import Nav from 'react-bootstrap/Nav' 
import {connect} from 'react-redux' 
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import {signOut} from './store/actions/actionUser' 
import { withRouter } from "react-router";

// import { NavLink } from 'react-router-dom'

export class SignInLink extends Component { 

  
  delete = () => {
    this.props.signOut()
    this.props.history.push("/signup") 
    // use/histoty 
  }

    render() {
        return (

            <Nav>
            <Nav.Item>
    <Nav.Link as={Link} to="/signup">SignUp</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link as={Link} to="/signin">SignIn</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  as={Link} to="/">ProductList</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link as={Link} to="/create">AddProducts</Nav.Link>
  </Nav.Item> 
  <Nav.Item>
  <Nav.Link  as={Link} to="/editprofile">YourProfile</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Button onClick={this.delete} variant="danger">SignOut</Button>
  </Nav.Item>
</Nav>

        )
    }
} 
const mapDispatchToProps = {
    signOut


 }

export default connect(null, mapDispatchToProps) (withRouter(SignInLink))
// <Nav.Link href="/signup">SignOut</Nav.Link> 
