/* eslint-disable import/no-anonymous-default-export */
import { createSelector } from "reselect";

const selecteOrder = (state) => state.order;

export default createSelector(selecteOrder, (item) => item);
