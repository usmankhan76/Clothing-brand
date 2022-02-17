import React from 'react'
import './checkout.styles.scss'
import { connect } from 'react-redux'
import { cartItemsSelector, cartTotalSelector } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeButtom from '../../components/stripe-button/stripe-button.component'
import { CheckoutHeaderContainer, CheckoutPageContainer, HeaderBlockContainer, TotalContainer, WarningContainer } from './checkout.styles'

const CheckoutPage = ({cartItems,total}) => {
    return  (
        <CheckoutPageContainer className='checkout-page'>
            <CheckoutHeaderContainer className="checkout-header">
                <HeaderBlockContainer className="header-block">
                    <span className="product">Product</span>
                </HeaderBlockContainer>

                <HeaderBlockContainer >
                    <span>Description</span>
                </HeaderBlockContainer>

                <HeaderBlockContainer >
                    <span>Quantity</span>
                </HeaderBlockContainer>

                <HeaderBlockContainer >
                    <span>Price</span>
                </HeaderBlockContainer>

                 <HeaderBlockContainer >
                    <span>Remove</span>
                </HeaderBlockContainer>
                
            </CheckoutHeaderContainer>
            
            {cartItems.map((item)=><CheckoutItem key={item.id} item={item}/>)}

        <TotalContainer className="total">TOTAL: ${total}</TotalContainer>

        <WarningContainer className='test-warning'>Enter the following card number <br/> 4242-4242-4242-4242</WarningContainer>  
          <StripeButtom  price={total}/>  
        </CheckoutPageContainer>
    )
}
const mapStateToProps=createStructuredSelector({
    cartItems:cartItemsSelector,
    total:cartTotalSelector
})

export default  connect(mapStateToProps)(CheckoutPage)
