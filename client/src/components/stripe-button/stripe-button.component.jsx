import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeButtom = ({price}) => {
    const amountForStrip=price*100 // we do this because stripe want the price in cents
    const stripeKey='pk_test_51JiNDKJOFzTSTSSjQs3ywOJtqteWJhWFjPLzI7h1yxsWwoBgNv1xY7G98ltbp7kFczODfGVp5pkJxBud2hmNedrS00l5DaxDIH'
    const onToken=(token)=>{
        axios({
            url:'payment',
            method:'post',
            data:{
                token,
                amount:amountForStrip
            }
        })
        .then(response=>alert("Payment is successful :",response))
        .catch(error=>{
            
            console.log("Payment error",error); 
            alert("Payment is Fail Please use the provided card number")})
    }
    return (
       <StripeCheckout
          name="Clothing Brand"
          image="https://svgshare.com/i/CUz.svg" 
          shippingAddress
          billingAddress
          stripeKey={stripeKey}
          label="Pay Now"
          panelLabel="Pay Now"
          token={onToken}
          amount={amountForStrip}
          description={`Your Total is $${price}`}
       /> 
    )
}

export default StripeButtom
