import React from 'react';
import ProductDetails from './ProductDetails';
import ReviewList from './ReviewList';
import product from '../data/product';

function ProductShowPage(props) {
  return (
    <div className="ProductShowPage">
      <ProductDetails {...product} />
      <ReviewList reviews={product.reviews} />
    </div>
  );
}

export default ProductShowPage;
