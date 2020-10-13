import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'

class SignIn extends Component { 
     state ={
      email:'',
      password:''
     }

     handleSubmit = (e) => { 
       axios.post('http://localhost:3000/sign-in', {
         email: this.email, 
         password:this.password
       })
     } 

     handleChange = (e) => { 
       this.setState({
        [e.target.controlId]: e.target.value
       })
        
     }
    render() {
        return (
            <div> 
            <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label htmlFor="email">Email address</Form.Label>
              <Form.Control onChange={this.handleChange} type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          
            <Form.Group controlId="formBasicPassword">
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

export default SignIn
