import {all,call,put,takeLatest} from 'redux-saga/effects' 
import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.actions";



function* clearingCart(){
    
      yield put(clearCart())        
    
}

function* onSignOutClearCart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS,clearingCart)
}
function* onSignInClearCart(){
    yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS,clearingCart)
}

export function* cartSagas(){
    yield all([
        call(onSignOutClearCart),
        // call(onSignInClearCart)
    ])

}
