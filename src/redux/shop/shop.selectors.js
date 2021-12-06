import { createSelector } from "reselect";

const shopSelector=state=>state.shop;
const shopDataSelector=createSelector(
    [shopSelector],
    shop=>shop.SHOP_DATA
)

export default shopDataSelector