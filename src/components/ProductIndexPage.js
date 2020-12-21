import React, { Component } from 'react';
import productList from '../data/productList';
import ProductDetails from './ProductDetails';
import {Link} from 'react-router-dom'
import {Product} from './request'

class ProductIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };

    this.deleteProduct = this.deleteProduct.bind(this);
  }
componentDidMount(){
  Product.all().then(products=>{
    this.setState((state)=>{
      return{
        products
      }

    })
  })
}
  deleteProduct(productId) {
    this.setState({
      products: this.state.products.filter(q => q.id !== productId),
    });
  }
  
  render() {
    return (
      <div className="ProductIndexPage">
        <h1>Products</h1>
        <ul>
          {this.state.products.map(product => (
            <li key={product.id}>
            <small>
              <em>{product.id}</em>
            </small>
            <Link key={product.id} to={`/products/${product.id}`}>{product.title}</Link>
            <button style={{ borderColor: 'red', margin: '5px 6px' }} onClick={() => this.deleteProduct(product.id)}>
              Delete
            </button>
          </li>       
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductIndexPage;



