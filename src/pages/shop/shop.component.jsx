import React from 'react'
import { connect } from 'react-redux';
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
// import SHOP_DATA from './shopdata';
 const   ShopPage=()=>  {
        return (
            <div className="shop-page">
              <CollectionOverview/>
            </div>
        )
    
}

export default ShopPage