import {all, call, put, takeLatest} from 'redux-saga/effects'
import { firestore, takingFirestoreObjectData } from '../../components/firebase/firebase.utils';
import { updataCollectionTypes } from './shop.types'
import {fetchCollectionsFailure,fetchCollectionsSuccess} from './shop.actions'

function* fetchCollectionAsync(){
    try {
         const collectionRef=firestore.collection('collections');
         const snapShot=yield collectionRef.get();
         const recievedData=yield call(takingFirestoreObjectData,snapShot);
         yield put(fetchCollectionsSuccess(recievedData))
         
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}
 function* fetchCollectionStartSaga(){
    yield takeLatest(updataCollectionTypes.FETCH_COLLECTIONS_START,fetchCollectionAsync) 
}


export function* shopSagas(){
    yield all([call(fetchCollectionStartSaga)])
}