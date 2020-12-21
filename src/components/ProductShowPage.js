import React, { Component } from 'react';
import ProductDetails from './ProductDetails';
import ReviewList from './ReviewList';
import product from '../data/product';

class ProductShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        ...product,
      },
    };
    console.log(`Props ID: ${props.match.params.id}`);
    this.deleteReview = this.deleteReview.bind(this);
  }

  deleteReview(reviewId) {
    const {
      product,
      product: { reviews },
    } = this.state;

    this.setState({
      product: {
        ...product,
        reviews: reviews.filter(r => r.id !== reviewId),
      },
    });
  }

  render() {
    const { product } = this.state;
    return (
      <div className="ProductShowPage">
        <ProductDetails {...product} />
        <ReviewList
          onReviewDeleteClick={this.deleteReview}
          reviews={product.reviews}
        />
      </div>
    );
  }
}

export default ProductShowPage;
