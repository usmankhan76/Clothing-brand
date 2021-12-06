import { createSelector } from "reselect";

const shopSelector=state=>state.shop;
const shopDataSelector=createSelector(
    [shopSelector],
    shop=>shop.collections
)

export default shopDataSelector