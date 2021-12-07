import React from 'react'
import PreviewCollection from '../preview-component/preview-collection'
import { collectionOverviewSelector } from '../../redux/shop/shop.selectors'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

const CollectionOverview = ({collections}) => {
    return (
        <div className="collections-overview">
             {collections.map(({id, ...otherprops})=>(
                <PreviewCollection key={id} {...otherprops} />
            ))}
        </div>
    )
}

const mapStateToProps=createStructuredSelector({
    collections:collectionOverviewSelector
})
export default connect(mapStateToProps)(CollectionOverview)
