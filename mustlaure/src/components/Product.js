import React, { Component } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
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
            <div className="container">
                <div className="photo">
                    <p>{this.state.product.picture}</p>
                </div>
                <div className="product-content">
                    <span>{this.state.product.productName}</span>
                    <p>{this.state.product.price}</p>
                    <textarea>{this.state.product.shortDescription}</textarea>
                </div>
                <div className="mb-2">
                    <Button variant="success" size="sm">
                        Add to Basket
                    </Button>
                </div>

            </div>
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
