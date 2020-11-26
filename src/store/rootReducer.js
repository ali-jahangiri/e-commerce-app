import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import faveReducer from "./faveReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  products: productsReducer,
  faveList: faveReducer,
  order: orderReducer,
});
