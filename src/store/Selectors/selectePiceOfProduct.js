/* eslint-disable import/no-anonymous-default-export */
import { createSelector } from "reselect";

const productSelectore = (state) => state.products.response;

export default (state, ownProps) =>
  createSelector(productSelectore, (item) =>
    item.filter((el) => el.routeName === ownProps)
  )(state);
