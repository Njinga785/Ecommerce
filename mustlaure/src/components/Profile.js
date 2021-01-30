import React, {Component} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Profile extends Component {
    render() {
        return(
            <div>
                <h4 className="title">EDIT YOUR PROFILE</h4>
            <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group  controlId="firstName">
                <Form.Label htmlFor="firstName">First Name</Form.Label>
                <Form.Control onChange={this.handleChange} type="text" placeholder="First Name" />
              </Form.Group>
          
              <Form.Group  controlId="lastName">
                <Form.Label htmlFor="lastName">Last Name</Form.Label>
                <Form.Control onChange={this.handleChange} type="text" placeholder="Last Name" />
              </Form.Group>
            </Form.Row> 
            <Form.Row>
              <Form.Group controlId="email">
                <Form.Label htmlFor="email">Email adress</Form.Label>
                <Form.Control onChange={this.handleChange} type="email" placeholder="Enter email" />
              </Form.Group>
          
              <Form.Group controlId="profile">
                <Form.Label htmlFor="profile">Profile Picture</Form.Label>
                <Form.Control onChange={this.handleChange} type="text" placeholder="Picture" />
              </Form.Group>
            </Form.Row> 
            <Form.Row>
              <Form.Group controlId="password">
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control onChange={this.handleChange} type="password" placeholder="password" />
              </Form.Group>
          
              <Form.Group controlId="password">
                <Form.Label htmlFor="confPassword">Confirm Password</Form.Label>
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
 export default Profile;

