import React from "react";
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from "../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from '../cart-icon/cart-icon.component' 
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { cartHiddenSelector } from "../../redux/cart/cart.selectors";
import { currentUserSelector } from "../../redux/user/user.selectors";
import {createStructuredSelector} from 'reselect'
import { HeaderContainer, LogoContainer, OptionContainer, OptionLink } from "./header.styles";
import { signOutStart} from "../../redux/user/user-action";
 const Header = ({currentUser,hidden,signOut}) => {
    //  console.log("This is the hidden",hidden);
    //  console.log("This is the user in header",currentUser);
    return (
        <HeaderContainer> 
            <LogoContainer  to='/'>
               <Logo className='logo'/> 
            </LogoContainer>
            <OptionContainer >
                <OptionLink  to='/shop'>SHOP</OptionLink>
                <OptionLink to='/shop'>CONTACTS</OptionLink>
               {currentUser ? (
               <OptionLink as="div" onClick={signOut}>Sign Out</OptionLink>):
               (<OptionLink to='/signin'>SIGN IN</OptionLink>)
               }
               <CartIcon/>
               
            </OptionContainer>
            {hidden?null:(<CartDropdown/>)}
            
        </HeaderContainer>
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

const mapDisptachToProps=dispatch=>({
    signOut:()=>dispatch(signOutStart())
})
export default connect(mapStateToPops,mapDisptachToProps)(Header)
