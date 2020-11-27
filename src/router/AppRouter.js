import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "../page/Home";
import CategoryContainer from "../page/CategoryContainer";
import PageNotFound from "../page/404";
import OneProduct from "../page/OneProduct";

import store from "../store/store";
import Checkout from "../page/Checjout";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/category/:category" component={CategoryContainer} />
          <Route path="/product/:category/:id" component={OneProduct} />
          <Route path="/checkout" component={Checkout} />
          <Route component={PageNotFound} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};

export default AppRouter;
