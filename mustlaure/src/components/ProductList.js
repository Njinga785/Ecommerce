import React, { Component } from 'react'

export class ProductList extends Component {
    render() {
        return (
            <div className="product-list"> 
                <div className="product"> 
                <span className="product-title">Product Title</span>
                <p>Premier Produit</p>
                </div> 
                <div className="product"> 
                <span className="product-title">Product Title</span>
                <p>Premier Produit</p>
                </div> 
                <div className="product"> 
                <span className="product-title">Product Title</span>
                <p>Premier Produit</p>
                </div>
                
            </div>
        )
    }
}

export default ProductList
