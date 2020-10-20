// import axios from 'axios'
import React, { Component } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import CardGroup from 'react-bootstrap/CardGroup' 
//  import {connect} from 'react-redux' 
//  import {getProducts} from './store/actions/actionProduct'
// import { response } from 'express'
// import Product from './Product'

export class ProductList extends Component {

    constructor() {
        super()
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3000/get-products')
            .then((response) => {
                this.setState({
                    products: response.data
                })
            })
    }
    render() {
        const products=this.state.products
       return(
           <div className="product-list">
        {products && products.map(product => {

                return (
                    <CardGroup style={{ width: '18rem' }} className="cards" key={product.id}>
                        <Card className="card" >
                            <Link to={'/' + product.id}>
                                <Card.Img variant="top" src={product.picture} alt="" />
                                <Card.Body className="body">
                                    <Card.Title>{product.productName}</Card.Title>
                                    <Card.Text>{product.price}</Card.Text>
                                </Card.Body>
                            </Link>

                        </Card>
                    </CardGroup>

                )
            })}   
       
        
        </div>
    ) 
        }
} 


export default ProductList
