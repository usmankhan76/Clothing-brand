import React from 'react'
import './cart-item.styles.scss'
const CartItem = ({item:{imageUrl,name,price,quantity }}) => {
    
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt="item" />
            <div className="item-details">
                <span className="name">{name}</span>
                {/* <span className="price"> Qty:{quantity} ${price} </span> this is anderi code */} 
                <div className="price"><span> Qty:{quantity}</span> <span>${quantity*price}</span> </div> 
                {/* this is me code  */}

            </div>
            
        </div>
    )
}

export default React.memo(CartItem) // we add the memo becasue this component is rendering that time equal to items ,if we add the memo it will run only that time if the items in its props change
