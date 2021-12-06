export const AddItem=(cartItems,cartItemsToAdd)=>{
    const existingItem=cartItems.find((item)=>item.id===cartItemsToAdd.id)
    // console.log("matched item:",existingItem)
    if(existingItem){
       return cartItems.map(item=>{
         return  item.id===existingItem.id?
         ({...item,quantity:item.quantity+1}):item //,price:item.price+existingItem.price
         // the brackets show that make the new object and pass all the properties of the item object through spread operator in this new object 
        })


    }
    
    else{
        return[...cartItems,{...cartItemsToAdd, quantity:1}]// the brackets show that make the new object and pass all the properties of the cartItemsToAdd object through spread operator in this new object and also pass the new property  quantity  in it with value 1
    }
} 
export const RemoveItemFromCart=(cartItems,removeItem)=>{
    const existingRemoveItem=cartItems.find(item=>item.id===removeItem.id);
    if (existingRemoveItem.quantity===1){
        return cartItems.filter(item=>item.id!==existingRemoveItem.id)
 
    }
    
        return cartItems.map(item=>item.id===existingRemoveItem.id?
            ({...item,quantity:item.quantity-1}) // price:item.price-item.price 
            :item)
    
}