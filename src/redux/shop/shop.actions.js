import { updataCollectionTypes } from "./shop.types";

export const updateCollecton=(collections)=>({
    type:updataCollectionTypes.updateCollection,
    payload:collections
})