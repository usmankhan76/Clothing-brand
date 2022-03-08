import './App.css';
import { Route,Switch,Redirect} from 'react-router-dom';
// import Homepage from './pages/homepage/homepage.component';
import React, { useEffect,lazy } from 'react'

import Header from './components/header/header.component';

import {  useDispatch, useSelector } from 'react-redux';
import { currentUserSelector } from './redux/user/user.selectors';

import { checkUserSession } from './redux/user/user-action';
import { GlobalStyle } from './global.styles';
import { Suspense } from 'react';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundry from './components/error-boundary/error-boundary.component';

const Homepage=lazy(()=>import('./pages/homepage/homepage.component'))
const ShopPage=lazy(()=>import('./pages/shop/shop.component'))
const SignInAndSignUpPage=lazy(()=>import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'))
const CheckoutPage=lazy(()=>import('./pages/checkout/checkout.component'))

const App=()=>{
      const currentUser=useSelector(currentUserSelector) // we pass the selector in useSelector
      const dispatch=useDispatch();
     useEffect(()=>{
      dispatch(checkUserSession()); 
     },[dispatch]) // to underStand this watch the module 22 useDispatch 
  
 
  
     return (
       
       <div>
        <GlobalStyle/>
          <Header />
        <ErrorBoundry>
          <Switch>
            <Suspense 
                fallback={<Spinner/>}>  
                {/* react lazy is asyncrhonous so that's why we use the susupense because if it not laod the component then it will show the laoding if we not use the suspense it will show the error*/}
              
              <Route exact path="/" component={Homepage}/>
              <Route path="/shop" component={ShopPage}/>
              <Route exact path="/signin"
              render={()=>currentUser?
                (<Redirect to='/'/>): (<SignInAndSignUpPage/>) } 
                />
              <Route exact path='/checkout'component={CheckoutPage}/>
            </Suspense>
          </Switch>
          
          </ErrorBoundry>
      </div>
    );
  }



export default (App);

