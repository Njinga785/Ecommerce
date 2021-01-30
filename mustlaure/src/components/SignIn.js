import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import jwt, { decode } from "jsonwebtoken"; 
import {connect} from 'react-redux' 
import {signIn} from './store/actions/actionUser'





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
        let decoded = jwt.decode(response.data.token)
        console.log(decoded)
        if (decoded) {
          localStorage.setItem('id', decoded.id)
          localStorage.setItem('name', decoded.name)
          localStorage.setItem('token', response.data.token) 
          localStorage.setItem('email', decoded.email)
          this.props.signIn(response.data.token, decoded.name, decoded.email, decoded.id)
          // this.props.listProducts()
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
    // console.log(this.props)
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

const mapStateToProps = (state) => ({
  mesUsers: state.userReducer
})
const mapDispatchToProps = {
  signIn
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);