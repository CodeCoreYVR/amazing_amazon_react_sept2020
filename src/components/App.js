import React, {Component} from 'react';
import ProductShowPage from './ProductShowPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import ProductIndexPage from './ProductIndexPage';
import ProductNewPage from './ProductNewPage';
import {Session} from './request';

class App extends Component {
  constructor(props){
    super(props);
    this.State={
      user:null
    }
  }
  componentDidMount() {
    Session.create({
      email: 'js@winterfell.gov',
      password: 'supersecret'
    })
    .then(user => {
      console.log(`User:${user}`)
      this.setState((state) => {
        return {
          user: user
        }
      })
    })
  }
  render() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path='/products'>
        <ProductIndexPage />
      </Route>
      <Route path='/products/new' component={ProductNewPage}>
      </Route>
      <Route path='/products/:id' component={ProductShowPage}>
      </Route>
    </Switch>
    </BrowserRouter>
    </div>
  );
}
};

export default App;
