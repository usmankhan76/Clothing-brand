import { createStore,applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import {persistStore } from 'redux-persist'
import logger from "redux-logger";
//logger is the middleware ,it is just just the functions that receive the actions and then do something with them and then pass them out in the root reducer
import createSagaMiddleware from 'redux-saga'
import { fetchCollectionStartSaga } from "./shop/shop.sagas";

const sagaMiddleware=createSagaMiddleware()
const middleware=[sagaMiddleware];
// redux-thunk is the pice of middleware that allow us to fire functions 



if(process.env.NODE_ENV==="development"){
    middleware.push(logger)
}
export const store=createStore(
    rootReducer,
    applyMiddleware(...middleware),
    );// by passing the vatriable  ...midlleware in parameters of applymiddleware() it will pass all the methods and feature of middleware into this function. in this way we want to add values to the middleware we can add it through line#6 array 
    
    export const persistor=persistStore(store); // we create new persisted version of our store using persistStore
    sagaMiddleware.run(fetchCollectionStartSaga)

    export default {persistor,store}


    // persistStore allow our browser to actually cache or store now depending on certain confihguration option that we going to set 