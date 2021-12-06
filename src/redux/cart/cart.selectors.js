import {createSelector} from 'reselect'
    const cartSelector=state=>state.cart; 
    export const cartItemsSelector=createSelector( // creatSelector takes two argument first is array containing of selectors and second argument is going to be a function that will return the value we out of the selector and in its parameter we recieve the each output of the input selectors in the array but in the order that those order  were written
        [cartSelector],
        cart=>cart.cartItems)

export const cartItemsCountSelector=createSelector(
    [cartItemsSelector],
    cartItems=>cartItems.reduce((accumolatedValue,item)=>accumolatedValue+item.quantity,0)
    )

export const cartHiddenSelector=createSelector(
    [cartSelector],
    cart=>cart.hidden
) 
export const cartTotalSelector=createSelector(
    [cartItemsSelector],
    cartItems=>cartItems.reduce((accumolatedValue,item)=>
    accumolatedValue+item.quantity*item.price,0)

    )
    