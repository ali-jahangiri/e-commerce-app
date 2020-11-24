import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import faveReducer from "./faveReducer";

export default combineReducers({
  products: productsReducer,
  faveList: faveReducer,
});
