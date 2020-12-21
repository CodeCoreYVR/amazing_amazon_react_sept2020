import React, { Component } from 'react';
import ProductDetails from './ProductDetails';
import ReviewList from './ReviewList';

import {Product} from './request'

class ProductShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
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
componentDidMount(){
  Product.one(this.props.match.params.id).then(product=>{
    this.setState((state)=>{
      return {
        product
      }
    })
  })
}
  render() {
    const { product } = this.state;
    return (
      <div className="ProductShowPage">
      {
        product.id ?
        (<div>
          
          <ProductDetails {...product} />
        <ReviewList
          onReviewDeleteClick={this.deleteReview}
          reviews={product.reviews}
        /></div>
        )
        :
        <div>Product is loading...</div>

      }
        
        
      
      </div>
    );
  }
}

export default ProductShowPage;
