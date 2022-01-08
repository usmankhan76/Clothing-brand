import React from 'react'
import { connect } from 'react-redux';
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import {  createStructuredSelector } from 'reselect';
import { fetchCollectionsAsync } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { fetchCollections, isCollectionsLoadedSelector } from '../../redux/shop/shop.selectors';

const UpdateCollectionOverview=WithSpinner(CollectionOverview)
const UpdateCollectionPage=WithSpinner(CollectionPage);
class ShopPage extends React.Component{ 
  componentDidMount(){
    const {fetchCollectionsStartAsync}=this.props
    // console.log("shop component rendered",fetchCollectionsStartAsync())
    fetchCollectionsStartAsync()
    
  }
  render(){
    const {match}=this.props;
    const {isCollectionFetching,isCollectionsLoadedSelector}=this.props 
     
     //  console.log("route props:",props);
    return (
            <div className="shop-page">
             <Route exact path={`${match.path}`} render={(props)=>
             <UpdateCollectionOverview 
             isloading={isCollectionFetching}
              {...props}/>}/>
             <Route exact path={`${match.path}/:collectionId`}
              render={(props)=>
             <UpdateCollectionPage isloading={!isCollectionsLoadedSelector} {...props}/>}/>
            </div>
        )
  }
    
}
const mapDispatchToProps=(dispatch)=>({
  fetchCollectionsStartAsync:()=>dispatch(fetchCollectionsAsync())
})
const mapStateToProps=createStructuredSelector({
  isCollectionFetching:fetchCollections,
  isCollectionsLoadedSelector:isCollectionsLoadedSelector
})
export default connect(mapStateToProps,mapDispatchToProps)(ShopPage)