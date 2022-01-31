import { updataCollectionTypes } from "./shop.types"


const INITIAL_STATE={
    collections: null,
    isFetching:false,
    errorMessage:undefined,

}


const shopReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case updataCollectionTypes.FETCH_COLLECTIONS_START:
            return{
                ...state,isFetching:true,
            }
        case updataCollectionTypes.FETCH_COLLECTIONS_SUCCESS:
            return { 
                ...state,
                isFetching:false,// when our fetching is success then we are sying isFetching is to false
                collections:action.payload}
        case updataCollectionTypes.FETCH_COLLECTIONS_FAILURE:
            return{
                ...state,
                isFetching:false,
                errorMessage:action.payload

            }
    
    default:
    return state
}
}
export default shopReducer