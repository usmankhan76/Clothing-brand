    import { all, call, put, takeLatest } from "redux-saga/effects";
    import { auth, createUserProfileDocument, getCurrentUser, googleProvider } from "../../components/firebase/firebase.utils";
    import {  SignInSuccess, SignInFailure, signOutFailure, signOutSuccess } from "./user-action";
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

    function* isUserAuthenticated(){
        try {
            const userAuth=yield getCurrentUser();
        if(!userAuth)return;
        else{
            yield getSnapShotfromUserAuth(userAuth)
        }
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

    function* signOut(){
      try {
          yield auth.signOut()
          yield put(signOutSuccess())
          
      } catch (error) {
          yield put(signOutFailure(error))
      }
    }



    function* onGoogleSignInStart(){
        yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle)
    }
    function* onEmailSignIn(){
        yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail) 
    }
    function* oncheckUserSession(){
        yield takeLatest(UserActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
    }
    function* onSignOut(){
        yield takeLatest(UserActionTypes.SIGN_OUT_START,signOut)
    }

    export  function* userSagas(){
    yield  all([
        call(onGoogleSignInStart),
        call(onEmailSignIn),
        call(oncheckUserSession),
        call(onSignOut),
    ])
    }