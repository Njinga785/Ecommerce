import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { listProducts } from "./store/actions/actionProduct";

class Yourproduct extends Component {
  render() {
    const produits = this.props.produits;
    const user = this.props.user;

    return (
      <div>
        <h4 className="title">YOUR PRODUCTS</h4>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ProductName</th>
                    <th>shortDescription</th>
                    <th>category</th>
                    <th>Picture</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                {produits.map((produit) => {
          if (produit.user_id == user.id) {
            return (
                  <tr>
                    <td>{produit.productName}</td>
                    <td>{produit.shortDescription}</td>
                    <td>{produit.category}</td>
                    <td><img src={produit.picture} width="75" height="75"/></td>
                    <td>{produit.price}</td>
                    <Button variant="primary">edit</Button>
                    <Button variant="danger">delete</Button>
                  </tr>
                     );
                    }
                  })}
                </tbody>
              </Table>
         
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  produits: state.productsReducer.products,
  user: state.userReducer,
});

const mapDispatchToProps = {
  listProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Yourproduct);
