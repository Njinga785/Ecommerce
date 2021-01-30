// import axios from 'axios'
import React, { Component } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import CardGroup from 'react-bootstrap/CardGroup'  
import {connect} from 'react-redux' 
import {listProducts} from './store/actions/actionProduct'


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
                this.props.listProducts(response.data)
            })
    }
    render()  {
        // const products=this.state.products
        const produits = this.props.produits
        console.log(this.props.produits); 
     return(
         <div className="linear"> 
        {produits.map(element => {

                return (
                    <CardGroup style={{ width: '18rem' }} className="product-list" key={element.id}>
                        <Card>
                            <Link to={'/' + element.id}>
                                <Card.Body>
                                <Card.Img variant="top" src={element.picture} width="286" height="180" alt="" />
                                    <Card.Title>{element.productName}</Card.Title>
                                    <Card.Text>{element.price}</Card.Text>
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

const mapStateToProps = (state) => ({
    produits: state.productsReducer.products
  })
  const mapDispatchToProps = {
    listProducts
  };



export default connect(mapStateToProps,mapDispatchToProps)(ProductList)
