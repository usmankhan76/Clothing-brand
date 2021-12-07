import React from 'react'
import { connect } from 'react-redux';
import './collection.styles.scss'
import { collectionSelector } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component'
const CollectionPage = ({collection:{items,title}}) => {
    // console.log("collection props",match.params.collectionId);
    // console.log("collection",collection);
    
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className="items">
            {items.map(item=>(<CollectionItem key={item.id} item={item}/>))}
            </div>
        </div>
    )
}

const mapStateToProps=(state,ownProps)=>({
    collection:collectionSelector(ownProps.match.params.collectionId)(state) 
})
export default connect(mapStateToProps)(CollectionPage)


            // <CollectionItem item={collection}/>
