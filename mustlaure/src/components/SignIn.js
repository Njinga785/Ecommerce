import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class SignIn extends Component { 
     state ={

     }

     handleSubmit = (e) => {
         console.log(e)
     } 

     handleChange = (e) => {
         console.log(e)
     }
    render() {
        return (
            <div> 
            <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={this.handleChange} type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
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
