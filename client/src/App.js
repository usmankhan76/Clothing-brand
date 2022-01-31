import './App.css';
import { Route,Switch,Redirect} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import React, { useEffect } from 'react'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {  useDispatch, useSelector } from 'react-redux';
import { currentUserSelector } from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';
import { checkUserSession } from './redux/user/user-action';

const App=()=>{
      const currentUser=useSelector(currentUserSelector) // we pass the selector in useSelector
      const dispatch=useDispatch();
     useEffect(()=>{
      dispatch(checkUserSession()); 
     },[dispatch]) // to underStand this watch the module 22 useDispatch 
  
 
  
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



export default (App);

