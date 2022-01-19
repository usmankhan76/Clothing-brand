    import { all, call, put, takeLatest } from "redux-saga/effects";
    import { auth, createUserProfileDocument, getCurrentUser, googleProvider } from "../../components/firebase/firebase.utils";
    import {  SignInSuccess, SignInFailure, signOutFailure, signOutSuccess, singUpSuccess, signUpFailure } from "./user-action";
    import UserActionTypes from "./user.types";


    function* getSnapShotfromUserAuth(user,additionalData){
        try {
            
        const userRef= yield call(createUserProfileDocument,user,additionalData);
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

    function* signUp({payload:{email,password,displayName}}){
        try {
            const{user}= yield auth.createUserWithEmailAndPassword(email,password);
            // yield getSnapShotfromUserAuth(user,displayName)  // we can also sign up by this way but comment the signInAfterSignup generator  and uncomment this line
            yield put(singUpSuccess({user,additionalDatat:{displayName}}));
            
        } catch (error) {
            put(signUpFailure(error))
        }
    }
    function* signInAfterSignUp({payload:{user,additionalData}}){

        yield getSnapShotfromUserAuth(user,additionalData)
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
    function* onSignUp(){
        yield takeLatest(UserActionTypes.SIGN_UP_START,signUp)
    }
    function* onSignUpSucces(){
        yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS,signInAfterSignUp)
    }

    export  function* userSagas(){
    yield  all([
        call(onGoogleSignInStart),
        call(onEmailSignIn),
        call(oncheckUserSession),
        call(onSignOut),
        call(onSignUp),
        call(onSignUpSucces),
    ])
    }