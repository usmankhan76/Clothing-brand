import { createStore,applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import {persistStore } from 'redux-persist'
import logger from "redux-logger";
//logger is the middleware ,it is just just the functions that receive the actions and then do something with them and then pass them out in the root reducer
import createSagaMiddleware from 'redux-saga'

// import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./root-saga";



const sagaMiddleware=createSagaMiddleware()
const middleware=[sagaMiddleware];
// redux-thunk is the pice of middleware that allow us to fire functions 



if(process.env.NODE_ENV==='development'){
    middleware.push(logger);
    
}
export const store=createStore(
    rootReducer,
    applyMiddleware(...middleware)
//composeWithDevTools(applyMiddleware(...middleware)),//to apply devTool uncomment it and comment upper line
    );
    
// by passing the vatriable  ...midlleware in parameters of applymiddleware() it will pass all the methods and feature of middleware into this function. in this way we want to add values to the middleware we can add it through line#6 array 
    
    export const persistor=persistStore(store); // we create new persisted version of our store using persistStore
    sagaMiddleware.run(rootSaga)

    // export default {persistor,store}
    export default store


    // persistStore allow our browser to actually cache or store now depending on certain confihguration option that we going to set 



    
// export let store;

// if(process.env.NODE_ENV==="development"){
//     // middleware.push(logger); if you want to apply logger middleware then you uncomment this line and comment line number 23
//          store=createStore(
//     rootReducer,
//     applyMiddleware(...middleware),
// composeWithDevTools(applyMiddleware(...middleware)),
//     );

// } else {
//          store=createStore(
//         rootReducer,
//         applyMiddleware(...middleware)

//         );
// }