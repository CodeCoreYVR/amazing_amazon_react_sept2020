import React from 'react';
import StarRating from './StarRating';

function ReviewDetails(props) {
  return (
    <div className="ReviewDetails">
      <StarRating max={5} current={props.rating} />
      <p>{props.rating}</p>
      <p>{props.body}</p>
      <p>By {props.reviewer.full_name}</p>
      <p>Created at: {props.created_at}</p>
      <button onClick={() => props.onDeleteClick(props.id)}>Delete</button>
    </div>
  );
}

export default ReviewDetails;
