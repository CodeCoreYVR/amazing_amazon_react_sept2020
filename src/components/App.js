import React from 'react';
import ProductShowPage from './ProductShowPage';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ProductIndexPage from './ProductIndexPage';

const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
      <Route exact path='/products'>
        <ProductIndexPage />
      </Route>
      <Route path='/products/:id' component={ProductShowPage}>
        
      </Route>
    </BrowserRouter>
    </div>
  );
};

export default App;
