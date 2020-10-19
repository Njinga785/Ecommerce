import React, { Component } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'; 
import Card from 'react-bootstrap/Card'
// 

class Product extends Component {
    constructor() {
        super()
        this.state = {
            product: null
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id
        console.log(id)
        axios.get(`http://localhost:3000/get-product/${id}`)
            .then((response) => {
                console.log(response)
                this.setState({
                    product: response.data[0]
                })

            })
    }

    render() {
        const product = this.state.product ? (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.product.picture} />
                <Card.Body>
                    <Card.Title>{this.state.product.productName}</Card.Title>
                    <Card.Text>{this.state.product.price}</Card.Text> 
                    <Card.Text>{this.state.product.shortDescription}</Card.Text>
                    <Button variant="success">Add to Basket</Button>
                </Card.Body>
            </Card>


        ) : (
                <div className="attente">Loading product...</div>
            )
        console.log(product)
        return (
            <div className="container">
                {product}
            </div>

        )
    }
}

export default Product
