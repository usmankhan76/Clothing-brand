import './App.css';
import { Route,Switch,Redirect} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import React, { useEffect } from 'react'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { connect } from 'react-redux';
import { currentUserSelector } from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';
import {collectionOverviewSelector} from './redux/shop/shop.selectors'
import { checkUserSession } from './redux/user/user-action';

const App=({checkUserSession,currentUser})=>{

     useEffect(()=>{
      checkUserSession(); 
     },[checkUserSession])
  
 
  
     return (
      <div className="App">
          <Header />
        <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route exact path="/signin"
        render={()=>currentUser?
        (<Redirect to='/'/>): (<SignInAndSignUpPage/>) } 
        />
        <Route exact path='/checkout'component={CheckoutPage}/>
        </Switch>
        
      </div>
    );
  }

const mapStateToProps=createStructuredSelector({
  currentUser:currentUserSelector,
  collectionArray:collectionOverviewSelector
})
const mapDispatchToProps=dispatch=>({
  checkUserSession:()=>dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);

