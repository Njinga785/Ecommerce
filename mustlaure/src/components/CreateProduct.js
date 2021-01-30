import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'  
import {connect} from 'react-redux'
import {addProduct} from './store/actions/actionProduct'
//  import jwt from "jsonwebtoken";

export class CreateProduct extends Component {
    constructor() {
        super()
        this.state = {
            productName: '',
            price: '',
            shortDescription: '',
            category: '',
            picture: ''
        }
    }

    handleSubmit = (e) => { 
        e.preventDefault({
            productName: this.state.productName,
            price: this.state.price,
            shortDescription: this.state.shortDescription,
            category: this.state.category,
            picture: this.state.picture,
            user_id: localStorage.getItem('id')
        })
       
        axios.post('http://localhost:3000/add-new-product', {
            productName: this.state.productName,
            price: this.state.price,
            shortDescription: this.state.shortDescription,
            category: this.state.category,
            picture: this.state.picture,
            user_id: localStorage.getItem('id')
        },
            {
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            .then((response) => {
                console.log(response) 
                // this.props.addProduct()
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
                    <Form.Row>
                        <Form.Group controlId="productName">
                            <Form.Label htmlFor="productName">Product Name</Form.Label>
                            <Form.Control onChange={this.handleChange} type="text" placeholder="Product Name" />
                        </Form.Group>

                        <Form.Group controlId="shortDescription">
                            <Form.Label htmlFor="shortDescription">Short Description</Form.Label>
                            <Form.Control onChange={this.handleChange} as="textarea" placeholder="Short Description" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="category">
                            <Form.Label htmlFor="category">Category</Form.Label>
                            <Form.Control onChange={this.handleChange} type="text" placeholder="Category" />
                        </Form.Group>

                        <Form.Group controlId="price">
                            <Form.Label htmlFor="price">Price</Form.Label>
                            <Form.Control onChange={this.handleChange} type="text" placeholder="Price" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="picture">
                            <Form.Label htmlFor="picture">Picture</Form.Label>
                            <Form.Control onChange={this.handleChange} type="text" placeholder="Picture" />
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
const mapDispatchToProps = {
    addProduct
}

export default connect() (CreateProduct)
