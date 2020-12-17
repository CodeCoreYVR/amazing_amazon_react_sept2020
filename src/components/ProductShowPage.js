import React, { Component } from 'react';
import ProductDetails from './ProductDetails';
import ReviewList from './ReviewList';
import aProduct from '../data/product';

class ProductShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        ...aProduct,
      },
    };
  }
  render() {
    const { product } = this.state;
    return (
      <div className="ProductShowPage">
        <ProductDetails {...product} />
        <ReviewList reviews={product.reviews} />
      </div>
    );
  }
}

export default ProductShowPage;
