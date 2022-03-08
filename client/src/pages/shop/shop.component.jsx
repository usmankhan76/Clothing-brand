import React, { useEffect, lazy } from 'react'
import { connect } from 'react-redux';
// import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import {  createStructuredSelector } from 'reselect';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { fetchCollections, isCollectionsLoadedSelector } from '../../redux/shop/shop.selectors';
import  CollectionPageContainer  from '../collection/collection.container';

const CollectionOverviewWithContainer  = lazy(()=>import('../../components/collection-overview/collection-overview.container'))

// const UpdateCollectionOverview=WithSpinner(CollectionOverview)

  const UpdateCollectionPage=WithSpinner(CollectionPage);
  
  const ShopPage=( {fetchCollectionsStart,match,isCollectionsLoadedSelector})=>{ 

    useEffect(()=>{
      fetchCollectionsStart();
    },[fetchCollectionsStart])  

    return (
            <div className="shop-page">
             <Route exact path={`${match.path}`} 
            //  render={(props)=>
            //  <UpdateCollectionOverview 
            //  isloading={isCollectionFetching}
            //   {...props}/>}
              component={CollectionOverviewWithContainer}
              />
             <Route exact path={`${match.path}/:collectionId`}
              render={(props)=>{
                // console.log("reder props",{props})
             return <UpdateCollectionPage 
             isloading={!isCollectionsLoadedSelector} 
             {...props}
             />}}
            // component={CollectionPageContainer}
             />
            </div>
        )
  }
    


const mapDispatchToProps=(dispatch)=>({
  fetchCollectionsStart:()=>dispatch(fetchCollectionsStart())
})
const mapStateToProps=createStructuredSelector({
  // isCollectionFetching:fetchCollections,
  isCollectionsLoadedSelector:isCollectionsLoadedSelector
})
export default connect(mapStateToProps,mapDispatchToProps)(ShopPage)