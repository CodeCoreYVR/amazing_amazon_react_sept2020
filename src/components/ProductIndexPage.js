import React, { Component } from 'react';
import productList from '../data/productList';

class ProductIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [...productList],
    };

    this.deleteProduct = this.deleteProduct.bind(this);
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
              </small>{' '}
              <a href="#">{product.title}</a>
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
