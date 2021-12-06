import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PreviewCollection from '../../components/preview-component/preview-collection';
import shopDataSelector from '../../redux/shop/shop.selectors';
// import SHOP_DATA from './shopdata';
 const   ShopPage=({collections})=>  {
        return (
            <div className="shop-page">
            {collections.map(({id, ...otherprops})=>(
                <PreviewCollection key={id} {...otherprops} />
            ))}
            </div>
        )
    
}
const mapStateToProps=createStructuredSelector({
    collections:shopDataSelector
})
export default connect(mapStateToProps)(ShopPage)