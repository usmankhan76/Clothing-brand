import {takeEvery} from 'redux-saga/effects'
import { updataCollectionTypes } from './shop.types'


function* fetchCollectionAsync(){
    yield console.log(" yield is chaling")
}
export function* fetchCollectionStartSaga(){
    yield takeEvery(updataCollectionTypes.FETCH_COLLECTIONS_START,fetchCollectionAsync) 
}
