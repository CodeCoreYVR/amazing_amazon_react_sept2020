import React from 'react';

function ProductDetails(props) {
  return (
    <div className="ProductDetails">
      <h2
        style={{
          color: 'maroon',
          fontWeight: '500',
        }}
      >
        {props.title}
      </h2>
      <p>{props.description}</p>
      <p>{props.price}</p>
      <p>
        <small>Created {props.created_at}</small>•
        <small>By {props.seller.full_name}</small>
      </p>
    </div>
  );
}

export default ProductDetails;
