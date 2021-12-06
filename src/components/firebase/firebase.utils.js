import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const config={
  apiKey: "AIzaSyCuzbhsUA02ODITOcI2Jy1efwjh9_lcwbg",
  authDomain: "ecommerce-store-60ca8.firebaseapp.com",
  projectId: "ecommerce-store-60ca8",
  storageBucket: "ecommerce-store-60ca8.appspot.com",
  messagingSenderId: "931868936150",
  appId: "1:931868936150:web:71c82224a04a755c034677"
};

//now we are creating function that allows us to take the user auth object that we got back from the authentication library and store it inside of database.That function will be aysncronous.The frist parameter of the function is user auth object and the second parameter is for additional data.So we only want to perfrorm this save to our database if we get back a user auth object(mean sign In ,not sign out) it means if the user auth object doesn't exist then we exit the function and if the user auth object is exist and then we are querin inside a firestore for the document to see if it already exist  


firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore=firebase.firestore();
const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"});
export const signInWithGoogle=()=>auth.signInWithPopup(provider)


export const createUserProfileDocument=async(userAuth,additionalData)=>{
    if(!userAuth) return;
    const userRef=firestore.doc(`/users/${userAuth.uid}`);  //it will return us queryReference object
    // const userCollection=firestore.collection(`/users`);  
    // const querySnapShoot=await userCollection.get()  
    const snapShoot=await userRef.get();
    
    if(!snapShoot.exist){
        const{displayName,email}=userAuth
        const creatingDate=new Date();
        try {
            await userRef.set({
                displayName,
                email,
                creatingDate,
                ...additionalData

            })

        } catch (error) {
            console.log("shanpShoot error :",error.message)
        }
    
    }

    // console.log("DocumentReference:",userRef)  
    // console.log("DocumentSnapShoot:",snapShoot)  
    // console.log("QuerySnapShoot:",userCollection)  
    // console.log("QuerySnapShootObject:",querySnapShoot)  
    return userRef
}
export default firebase







//Secnd Method

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';
// const config={
//   apiKey: "AIzaSyCuzbhsUA02ODITOcI2Jy1efwjh9_lcwbg",
//   authDomain: "ecommerce-store-60ca8.firebaseapp.com",
//   projectId: "ecommerce-store-60ca8",
//   storageBucket: "ecommerce-store-60ca8.appspot.com",
//   messagingSenderId: "931868936150",
//   appId: "1:931868936150:web:71c82224a04a755c034677"
// };
// firebase.initializeApp(config);

// var provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({
//   'login_hint': 'user@example.com'
// });
// export const signInWithGoogle=()=>firebase.auth()
//   .signInWithPopup(provider)
//   .then((result) => {
//     /** @type {firebase.auth.OAuthCredential} */
//     var credential = result.credential;

//     // This gives you a Google Access Token. You can use it to access the Google API.
//     var token = credential.accessToken;
//     // The signed-in user info.
//     var user = result.user;
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
//   });


//third Method

// import {initializeApp} from 'firebase/app';
// import {Firestore} from 'firebase/firestore';
// import {GoogleAuthProvider,getAuth,signInWithPopup} from 'firebase/auth';
// const config={
//   apiKey: "AIzaSyCuzbhsUA02ODITOcI2Jy1efwjh9_lcwbg",
//   authDomain: "ecommerce-store-60ca8.firebaseapp.com",
//   projectId: "ecommerce-store-60ca8",
//   storageBucket: "ecommerce-store-60ca8.appspot.com",
//   messagingSenderId: "931868936150",
//   appId: "1:931868936150:web:71c82224a04a755c034677"
// };

// const app=initializeApp(config);
// export const auth=getAuth(app);
// export const firestore=new Firestore(app);
// const provider= new GoogleAuthProvider();
// provider.setCustomParameters({'prompt':"select_account"});
// // export const signInWithGoogle=()=>auth.signInWithPopup(provider);
// export const signInWithGoogle =signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });




// export default app