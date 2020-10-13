import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export class CreateProduct extends Component { 
    
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group controlId="formGridProductName">
                            <Form.Label htmlFor="name">Product Name</Form.Label>
                            <Form.Control onChange={this.handleChange} type="text" placeholder="Product Name" />
                        </Form.Group>

                        <Form.Group controlId="formGridShortDescription">
                            <Form.Label htmlFor="description">Short Description</Form.Label>
                            <Form.Control onChange={this.handleChange} type="text" placeholder="Short Description" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="formGridCategory">
                            <Form.Label htmlFor="category">Category</Form.Label>
                            <Form.Control onChange={this.handleChange} type="text" placeholder="Category" />
                        </Form.Group>

                        <Form.Group controlId="formGridPrice">
                            <Form.Label htmlFor="price">Price</Form.Label>
                            <Form.Control onChange={this.handleChange} type="text" placeholder="Price" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="formGridPictureLink">
                            <Form.Label htmlFor="pictureLink">Picture Link</Form.Label>
                            <Form.Control onChange={this.handleChange} type="text" placeholder="Picture Link" />
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

export default CreateProduct
