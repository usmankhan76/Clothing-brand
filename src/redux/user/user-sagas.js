import { all, call, put, takeLatest } from "redux-saga/effects";
import { auth, createUserProfileDocument, googleProvider } from "../../components/firebase/firebase.utils";
import {  SignInSuccess, SignInFailure } from "./user-action";
import UserActionTypes from "./user.types";


 function* getSnapShotfromUserAuth(user){
     try {
         
      const userRef= yield call(createUserProfileDocument,user);
        const snapShot= yield userRef.get()
        yield put(SignInSuccess({id:snapShot.id,...snapShot.data()}));
        
    } catch (error) {
        yield put(SignInFailure(error))
    }
 }


function* signInWithGoogle(){
    try {

    const {user}= yield auth.signInWithPopup(googleProvider) //it will return the same user object like in onAuthstateChanged give us 
     yield getSnapShotfromUserAuth(user);
    } catch (error) {
    yield put(SignInFailure(error))        
    }
    
}



function* signInWithEmail({payload:{email,password}}){
    try {
        // yield console.log({email,password})
        const {user}= yield  auth.signInWithEmailAndPassword(email,password);
        yield getSnapShotfromUserAuth(user);
        
    } catch (error) {
        yield put(SignInFailure(error))
    }
}

function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle)
}
function* onEmailSignIn(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail) 
}

export  function* userSagas(){
  yield  all([call(onGoogleSignInStart),call(onEmailSignIn)])
}