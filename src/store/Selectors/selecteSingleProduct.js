/* eslint-disable import/no-anonymous-default-export */
import { createSelector } from "reselect";

const selecteAllProducts = (state) => state.products.response;

export default (state, category, id) =>
  createSelector(selecteAllProducts, (item) =>
    item
      .find((el) => el.routeName === category)
      .items.find((el) => el.id === parseInt(id))
  )(state);
