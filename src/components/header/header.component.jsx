import React from "react";
import './header.styles.scss'
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from "../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from '../cart-icon/cart-icon.component' 
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { cartHiddenSelector } from "../../redux/cart/cart.selectors";
import { currentUserSelector } from "../../redux/user/user.selectors";
import {createStructuredSelector} from 'reselect'
 const Header = ({currentUser,hidden}) => {
    //  console.log("This is the hidden",hidden);
    //  console.log("This is the user in header",currentUser);
    return (
        <div className='header'> 
            <Link className='logo-container' to='/'>
               <Logo className='logo'/> 
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>SHOP</Link>
                <Link className="option" to='/shop'>CONTACTS</Link>
               {currentUser ? (
               <div className='option' onClick={()=>auth.signOut()}>Sign Out</div>):
               (<Link className="option" to='/signin'>SIGN IN</Link>)
               }
               <CartIcon/>
               
            </div>
            {hidden?null:(<CartDropdown/>)}
            
        </div>
    )
}
// const mapStateToPops=(state)=>({
//     currentUser:currentUserSelector(state),
//     hidden:cartHiddenSelector(state)
// }) if we have alot of selector so we can use createStructuredSelector because it automatically pass the high level state( which he take from the mapStateToProps )to the selectors 
const mapStateToPops=createStructuredSelector({
    currentUser:currentUserSelector,
    hidden:cartHiddenSelector
})
export default connect(mapStateToPops)(Header)
