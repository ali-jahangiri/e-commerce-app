import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "../page/Home";
import CategoryContainer from "../page/CategoryContainer";
import PageNotFound from "../page/404";

import store from "../store/store";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/category/:category" component={CategoryContainer} />
          <Route component={PageNotFound} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};

export default AppRouter;
