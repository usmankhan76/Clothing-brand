import React from "react";
import { connect } from "react-redux";
import CustomButtom from "../custom-button/custom-button.component";
import './collection-item.styles.scss'
import { addItem } from "../../redux/cart/cart.actions";
const CollectionItem=({item,addItem})=>{
    const {id,name,imageUrl,price}=item
    return(
     <div key={id} className="collection-item">
        <div className="image" style={{backgroundImage:`url(${imageUrl})`}}/>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
            <CustomButtom inverted onClick={()=>addItem(item)}>Add To Cart</CustomButtom>
    </div>)
    
}
const mapDispatchToProps=(dispatch)=>({
    addItem:item=>(dispatch(addItem(item)))
})
export default connect(null,mapDispatchToProps) (CollectionItem)