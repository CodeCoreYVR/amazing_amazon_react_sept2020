import React, { Component } from 'react';
import productList from '../data/productList';

class ProductIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [...productList],
    };
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
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductIndexPage;
