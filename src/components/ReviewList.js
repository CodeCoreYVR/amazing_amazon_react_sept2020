import React from 'react';
import ReviewDetails from './ReviewDetails';

function ReviewList(props) {
  return (
    <ul className="ReviewList">
      {props.reviews.map(review => (
        <li key={review.id}>
          <ReviewDetails
            onDeleteClick={id => props.onReviewDeleteClick(id)}
            {...review}
          />
        </li>
      ))}
    </ul>
  );
}

export default ReviewList;