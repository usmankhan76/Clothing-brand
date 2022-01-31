import React from 'react'
import './preview-collection.style.scss'
import CollectionItem from '../collection-item/collection-item.component'

export default function PreviewCollection(props) {
    const {title,items,history,match,routeName}=props
    // console.log("preview props:",props);
    return ( 
       <div className="collection-preview">
           <h1 className="title" onClick={()=>history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</h1>
           <div className="preview">
             {items.filter((item ,index)=> index<4).map((item)=>( 
                  <CollectionItem key={item.id} item={item} /> 
                  ))}
            </div>
       </div>
    )
}
