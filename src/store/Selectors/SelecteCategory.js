import { createSelector } from "reselect";

const selecteAllProducts = (state) => state.products.response;

export default createSelector(selecteAllProducts, (selecteAllProducts) =>
  selecteAllProducts.map((el) => el.title)
);
