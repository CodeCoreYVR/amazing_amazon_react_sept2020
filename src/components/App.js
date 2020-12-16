import React, { Component } from 'react';
import ProductDetails from './ProductDetails';
import ReviewList from './ReviewList';

class App extends Component {
  render() {
    const seller = { full_name: 'Maxwell Gordon' };
    const reviewer1 = { full_name: 'Steve Godin' };
    const reviewer2 = { full_name: 'Tam Kbeili' };
    const reviews = [
      {
        id: 1,
        rating: 3,
        body: 'This is an okay product.',
        created_at: new Date().toLocaleDateString(),
        reviewer: reviewer1,
      },
      {
        id: 3,
        rating: 5,
        body: 'Steve is wrong. This is a create product!',
        created_at: new Date().toLocaleDateString(),
        reviewer: reviewer2,
      },
      {
        id: 5,
        rating: 1,
        body: 'I am never wrong.',
        created_at: new Date().toLocaleDateString(),
        reviewer: reviewer1,
      },
    ];
    return (
      <div className="App">
          <ProductDetails
          id={2}
          title="Product Title"
          description="This is the description of the product"
          price={20.99}
          created_at={new Date().toLocaleDateString()}
          seller={seller}
        />
        <ReviewList reviews={reviews} />
      </div>
    );
  }
}

export default App;
