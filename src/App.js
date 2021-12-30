import './App.css';
import { Route,Switch,Redirect} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';

import React from 'react'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { addCollectionsAndDocuments, auth,createUserProfileDocument } from './components/firebase/firebase.utils';
import { connect } from 'react-redux';
import setCurrentUser from './redux/user/user-action';
import { currentUserSelector } from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';

import {collectionOverviewSelector} from './redux/shop/shop.selectors'

class App extends React.Component{
  unsubscribeFromAuth=null
  componentDidMount(){
    const{setCurrentUser,collectionArray}=this.props;
    // console.log("this is the dispatch  user",setCurrentUser)
    // console.log("this is the user",currentUser)
    console.log("this is the collectionArray",collectionArray)
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{  
      if(userAuth){
       const refUser=await createUserProfileDocument(userAuth);
       refUser.onSnapshot(snapShotObject=>{
      // console.log('user',snapShotObject.data());
        setCurrentUser({
           id:snapShotObject.id,
           ...snapShotObject.data()
         });
      })
      }
      else{
        setCurrentUser(userAuth)
      }    
    })
    // addCollectionsAndDocuments('collections',collectionArray.map(({title,items})=>({title,items}))) // we comment this code because we wanat to push the shop-data to the firesotore only one time if we don't want to the   
    
  }
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
const mapDispatchToProps=(dispatch)=>({
  setCurrentUser:(user)=>dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);

