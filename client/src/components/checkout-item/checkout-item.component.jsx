import React from "react";
import { connect } from "react-redux";
import { addItem, ClearItemFromCart, removeItem } from "../../redux/cart/cart.actions";
import './checkout-item.styles.scss';

const CheckoutItem = ({item,clearItem,addItem,removeItem}) => {
    const {imageUrl,quantity,name,price}=item
    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img alt='pic' src={imageUrl}/>
                </div> 
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=>removeItem(item)} >&#10094;</div>
                  
                 <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=>addItem(item)}> &#10095;</div>
                 </span>
            <span className="price">${quantity*price}</span>
            <div className="remove-button" onClick={()=>clearItem(item)}>&#10006;</div>


            
        </div>
    )
}
const mapDispatchToProps=(dispatch)=>({
    clearItem:item=>dispatch(ClearItemFromCart(item)),
    addItem:item=>dispatch(addItem(item)),
    removeItem:item=>dispatch(removeItem(item))
})
export default  connect(null,mapDispatchToProps) (CheckoutItem)
