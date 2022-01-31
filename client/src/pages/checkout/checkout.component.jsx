import React from 'react'
import './checkout.styles.scss'
import { connect } from 'react-redux'
import { cartItemsSelector, cartTotalSelector } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeButtom from '../../components/stripe-button/stripe-button.component'

const CheckoutPage = ({cartItems,total}) => {
    return  (
        <div className='checkout-page'>
            <div className="checkout-header">
                <div className="header-block">
                    <span className="product">Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                 <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            
            {cartItems.map((item)=><CheckoutItem key={item.id} item={item}/>)}
        <div className="total">TOTAL: ${total}</div> 
        <div className='test-warning'>Enter the following card number <br/> 4242-4242-4242-4242</div>  
          <StripeButtom  price={total}/>  
        </div>
    )
}
const mapStateToProps=createStructuredSelector({
    cartItems:cartItemsSelector,
    total:cartTotalSelector
})

export default  connect(mapStateToProps)(CheckoutPage)