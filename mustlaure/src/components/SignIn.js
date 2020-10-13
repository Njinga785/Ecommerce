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
       e.preventDefault({
        email: this.email, 
        password:this.password
      }) 
       console.log()
       axios.post('http://localhost:3000/sign-in', {
         email: this.email, 
         password:this.password
       }) 
       .then((response) => {
         console.log(response)
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

export default SignIn
