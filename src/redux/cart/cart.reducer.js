import { CartActionTypes } from "./cart.types";
import { AddItem, RemoveItemFromCart } from "./cart.utils";

const INITIAL_STATE={
    hidden:true,
    cartItems:[],
}
const cartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {...state ,
                 cartItems:AddItem(state.cartItems,action.payload)
                }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems:state.cartItems.filter(item=>item.id!==action.payload.id)
            } 
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems:RemoveItemFromCart(state.cartItems,action.payload)
            }
        case CartActionTypes.CLEAR_CART:
            return{
                ...state,
                cartItems:[]
            }               
            

            default:
            return state
            
    }
    
}
export default cartReducer