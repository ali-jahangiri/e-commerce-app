import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../page/Home";

import store from "../store/store";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};

export default AppRouter;
