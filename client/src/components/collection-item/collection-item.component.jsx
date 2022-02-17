 import React from "react";
import { connect } from "react-redux";
import CustomButtom from "../custom-button/custom-button.component";
// import './collection-item.styles.scss'
import { addItem } from "../../redux/cart/cart.actions";

import {
     AddButton,
     BackgroundImage,
     CollectionFooterContainer,
     CollectionItemContainer,
     NameContainer,
     PriceContainer } from "./collection-item.styles";



const CollectionItem=({item,addItem})=>{
    const {id,name,imageUrl,price}=item
    return(
        <CollectionItemContainer >

                <BackgroundImage className="image" imageUrl={imageUrl}/>
                <CollectionFooterContainer >
                    <NameContainer >{name}</NameContainer>
                    <PriceContainer >{price}</PriceContainer>
                </CollectionFooterContainer>

                <AddButton inverted onClick={()=>addItem(item)}>Add To Cart</AddButton>
        </CollectionItemContainer>)
        
}

const mapDispatchToProps=(dispatch)=>({
    addItem:item=>(dispatch(addItem(item)))
})

export default connect(null,mapDispatchToProps) (CollectionItem)