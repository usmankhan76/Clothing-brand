import React from 'react'
import './preview-collection.style.scss'
import CollectionItem from '../collection-item/collection-item.component'
import { CollectionPreviewContainer, PreviewContainer, TitleContainer } from './preview-collection.styles'

export default function PreviewCollection(props) {
    const {title,items,history,match,routeName}=props
    // console.log("preview props:",props);
    return ( 
       <CollectionPreviewContainer >
       {/* <h1>This is preview</h1> */}
           <TitleContainer 
                onClick={()=>history.push(`${match.path}/${routeName}`)}>
                {title.toUpperCase()}
            </TitleContainer>
           <PreviewContainer >
             {items.filter((item ,index)=> index<4).map((item)=>( 
                  <CollectionItem key={item.id} item={item} /> 
                  ))}
            </PreviewContainer>
       </CollectionPreviewContainer>
    )
}
