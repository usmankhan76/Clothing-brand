import { connect } from 'react-redux'
import { compose } from 'redux'
import {createStructuredSelector }from 'reselect'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import {isCollectionsLoadedSelector} from '../../redux/shop/shop.selectors'
import CollectionPage from "./collection.component"
const mapStateToProps=createStructuredSelector({
    isLoading:(state)=>!isCollectionsLoadedSelector(state)
})
//  export const collectionPagContainer=connect(mapStateToProps)(WithSpinner(CollectionPage)) //instead of writing this we can also write it with compose redux like below
export const CollectionPageContainer=compose(connect(mapStateToProps),WithSpinner)(CollectionPage)