import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import jwt, { decode } from "jsonwebtoken"; 
import {connect} from 'react-redux' 
import {signIn} from './store/actions/actionUser' 
import {listProducts} from './store/actions/actionProduct'


// import { Redirect } from "react-router-dom";
// import SecuresRoutes from './SecuredRoutes'
// import History from 'react-router-dom' 




class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '', 
     
    }
  }
  handleSubmit = (e) => {
    e.preventDefault() 
  

    axios.post('http://localhost:3000/sign-in', {
      email: this.state.email,
      password: this.state.password
    })
      .then((response) => { 
        
        console.log(response)
        let decoded = jwt.decoded(response.data.token)
        console.log(decoded)
        if (decoded) {
          localStorage.setItem('id', decoded.id)
          localStorage.setItem('name', decoded.name)
          localStorage.setItem('token', response.data.token) 
          localStorage.setItem('email', decoded.email)
          this.props.signIn(decoded.id, decoded.name, response.data.token, decoded.email)
         this.props.listProducts()
          this.props.history.push('/')
        }else{ 
          
          console.log('acces interdit')
        }

      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })

  } 
  
  render() { 
    console.log(this.props)
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label htmlFor="email">Email address</Form.Label>
            <Form.Control onChange={this.handleChange} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
              </Form.Text>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control onChange={this.handleChange} type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="success" type="submit">
            Submit
            </Button>
        </Form>
      </div>
    )
  }
} 

const mapDispatchToProps = {
  signIn, 
  listProducts
  
}

export default connect(null, mapDispatchToProps) (SignIn)
