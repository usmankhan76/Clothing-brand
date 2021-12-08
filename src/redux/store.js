import { createStore,applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import {persistStore } from 'redux-persist'
import logger from "redux-logger";
//logger is the middleware ,it is just just the functions that receive the actions and then do something with them and then pass them out in the root reducer
const middleware=[];
if(process.env.NODE_ENV==="development"){
    middleware.push(logger)
}
export const store=createStore(
    rootReducer,
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTESNSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());// by passing the vatriable  ...midlleware in parameters of applymiddleware() it will pass all the methods and feature of middleware into this function. in this way we want to add values to the middleware we can add it through line#6 array 
    
    export const persistor=persistStore(store); // we create new persisted version of our store using persistStore

    export default {persistor,store}


    // persistStore allow our browser to actually cache or store now depending on certain confihguration option that we going to set 