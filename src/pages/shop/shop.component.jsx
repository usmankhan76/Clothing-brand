import React from 'react'
import { connect } from 'react-redux';
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';

 const   ShopPage=(props)=>  {
   const{match}=props
  //  console.log("route props:",props);
        return (
            <div className="shop-page">
             <Route exact path={`${match.path}`} component={CollectionOverview}/>
             <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
        )
    
}

export default ShopPage