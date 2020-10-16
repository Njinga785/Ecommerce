import Axios from 'axios'
import React, { Component } from 'react'
import axios from 'axios' 
import {Link} from 'react-router-dom'
// import { response } from 'express'
// import Product from './Product'

export class ProductList extends Component { 

    constructor(){
        super() 
        this.state={
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

        const{products} = this.state 
        const productList = products.length?(
            products.map(product => {
                return(
                    <div className="produit" key={product.id}> 
                    <div className="product-content">  
                    <p>{product.picture}</p> 
                    <Link to={'/' + product.id}>
                    <span>{product.productName}</span> 
                    </Link>
                    <p>{product.price}</p>
                    </div>
                    </div>
                )
            })
        ):(
            <div className="center">No product</div>
        )
        return (
            <div className="container"> 
               {productList} 
                
            </div>
        )
    }
}

export default ProductList
