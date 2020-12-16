import React, { Component } from 'react';
import ProductDetails from './ProductDetails';
import ReviewDetails from './ReviewDetails';

class App extends Component {
  render() {
    const seller = { full_name: 'Maxwell Gordon' };
    const reviewer = { full_name: 'Steve Godin' };
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
        <ReviewDetails
          id={1}
          rating={3}
          body="This is an okay product."
          created_at={new Date().toLocaleDateString()}
          reviewer={reviewer}
        />
      </div>
    );
  }
}

export default App;
