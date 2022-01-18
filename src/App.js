import './App.css';
import { Route,Switch,Redirect} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';

import React from 'react'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { connect } from 'react-redux';
import { currentUserSelector } from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';

import {collectionOverviewSelector} from './redux/shop/shop.selectors'

class App extends React.Component{
  unsubscribeFromAuth=null
 
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
     return (
      <div className="App">
          <Header />
        <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route exact path="/signin"
        render={()=> this.props.currentUser?
        (<Redirect to='/'/>): (<SignInAndSignUpPage/>) } 
        />
        <Route exact path='/checkout'component={CheckoutPage}/>
        </Switch>
        
      </div>
    );
  }
}
const mapStateToProps=createStructuredSelector({
  currentUser:currentUserSelector,
  collectionArray:collectionOverviewSelector
})

export default connect(mapStateToProps,null)(App);

