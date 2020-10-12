import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export class SignUp extends Component { 
    state={

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
            <Form.Row>
              <Form.Group  controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control onChange={this.handleChange} type="email" placeholder="Enter email" />
              </Form.Group>
          
              <Form.Group  controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control onChange={this.handleChange} type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row> 
            <Form.Row>
              <Form.Group controlId="formGridEmail">
                <Form.Label>Email adress</Form.Label>
                <Form.Control onChange={this.handleChange} type="email" placeholder="Enter email" />
              </Form.Group>
          
              <Form.Group controlId="formGridPassword">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control onChange={this.handleChange} type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row> 
            <Form.Row>
              <Form.Group controlId="formGridEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={this.handleChange} type="email" placeholder="Enter email" />
              </Form.Group>
          
              <Form.Group controlId="formGridPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control onChange={this.handleChange} type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>
          
             <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
            </div>
        )
    }
}

export default SignUp
