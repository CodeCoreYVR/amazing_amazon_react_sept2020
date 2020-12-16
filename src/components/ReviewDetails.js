import React from 'react';

function ReviewDetails(props) {
  return (
    <div className="ReviewDetails">
      <p>{props.rating}</p>
      <p>{props.body}</p>
      <p>By {props.reviewer.full_name}</p>
      <p>Created at: {props.created_at}</p>
    </div>
  );
}

export default ReviewDetails;
