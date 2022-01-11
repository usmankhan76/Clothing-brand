import { firestore, takingFirestoreObjectData } from "../../components/firebase/firebase.utils";
import { updataCollectionTypes } from "./shop.types";

 export const fetchCollectionsStart=()=>({
    type:updataCollectionTypes.FETCH_COLLECTIONS_START
    // we don't want to pass the payload because we only want to change the isFetching property
})


const fetchCollectionsSuccess=(collectionData)=>({
    type:updataCollectionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionData
})

const fetchCollectionsFailure=(errorMessage)=>({
    type:updataCollectionTypes.FETCH_COLLECTIONS_FAILURE,
    payload:errorMessage
})

 // the below fucntion is the action creater and it return us the function which have dispatch parameter

 export const fetchCollectionsAsync=()=>{
     return dispatch=>{
          const collectionRef=firestore.collection('collections');
          dispatch(fetchCollectionsStart())
        collectionRef.get().then(snapShotObj=>{
           const recievedData=takingFirestoreObjectData(snapShotObj)
            dispatch(fetchCollectionsSuccess(recievedData))   
      }).catch(error=>dispatch(fetchCollectionsFailure(error)))
     }
 }