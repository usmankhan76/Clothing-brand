import React from 'react'
import { connect, useSelector } from 'react-redux';
import './collection.styles.scss'
import { collectionSelector } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component'
import { useParams } from 'react-router-dom';
const CollectionPage = () => {

    const params=useParams();
    const collection=useSelector(collectionSelector(params.collectionId));   
    const {items,title}=collection;

    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className="items">
            {items.map(item=>(<CollectionItem key={item.id} item={item}/>))}
            </div>
        </div>
    )

}

export default CollectionPage


