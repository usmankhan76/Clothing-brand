import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchCollections } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionOverview from "./collection-overview.component";
import {compose} from 'redux'


const mapStateToProps=createStructuredSelector({
    isLoading:fetchCollections
})
//  export const collectionOverwiewWithContainer=connect(mapStateToProps)
//  (WithSpinner(CollectionOverview)) // instead of writing this we can also write it with compose redux like below
export const CollectionOverviewWithContainer=compose(
    connect(mapStateToProps),WithSpinner)(CollectionOverview)