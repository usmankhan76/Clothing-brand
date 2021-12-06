import './App.css';
import { Route,Switch,Redirect} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';

import React from 'react'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth,createUserProfileDocument } from './components/firebase/firebase.utils';
import { connect } from 'react-redux';
import setCurrentUser from './redux/user/user-action';
import { currentUserSelector } from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';



class App extends React.Component{
  unsubscribeFromAuth=null
  componentDidMount(){
    //so normally before we fetched data is we inside of the componentDidMount method where we used to fetching data. Once the code call fetch it won't again it untill the componentDidMount will gets  rerender but we don't want to rerender our app we just want to always know when firebase has realized that the authentication state has changed , so whenever user signIn and signOut we want to be aware of that changes without maually fetc firebase give us the beast method which is onAuthStateChanged .it take function where the parameter is, what the user have state of the auth on firebase  project
    const{setCurrentUser}=this.props;
    // console.log("this is the dispatch  user",setCurrentUser)
    // console.log("this is the user",currentUser)
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{  
      if(userAuth){
       const refUser=await createUserProfileDocument(userAuth);
       refUser.onSnapshot(snapShotObject=>{
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
    //auth.onAuthStateChanged return us the function thats why we assign it to the unsubscribeFromAuth that function will we call it will close the subsciption 
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
  currentUser:currentUserSelector
})
const mapDispatchToProps=(dispatch)=>({
  setCurrentUser:(user)=>dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);

