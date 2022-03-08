import { createSelector } from "reselect";

// const COLLECTION_MAP_ID={
//     hats:1,
//     sneakers:2,
//     jackets:3,
//     womens:4,
//     mens:5
// }

const shopSelector=state=>state.shop;

const shopDataSelector=createSelector(
    [shopSelector],
    shop=>shop.collections
)

 export const collectionOverviewSelector=createSelector(
    [shopDataSelector],
    collections=>collections?(Object.keys(collections).map(key=>collections[key])):[]  // for this logic see the object_methods javasScrip file
    )
// export const collectionSelector=collectionUrlParam=>createSelector(
//     [shopDataSelector],
//     collections=>collections.find(item=>item.id===COLLECTION_MAP_ID[collectionUrlParam])
// )  we don't have need to fetch collection through filter fucntion because if we have collection in thousand we want last one so it not good for performance . so we use objects instead of array because we can easily access value of key by passing it like below


export const collectionSelector=collectionUrlParam=>createSelector(
    [shopDataSelector],
    collections=>collections?( collections[collectionUrlParam]):null    
) 
export const fetchCollections=createSelector(
    [shopSelector],
    shop=>shop.isFetching
)
export const isCollectionsLoadedSelector=createSelector(
    [shopSelector],
    shop=>!!shop.collections
    // read this article for double bang operator
    //https://dev.to/sanchithasr/what-is-the-double-bang-operator-in-javascript-4i3h

)

export default shopDataSelector
