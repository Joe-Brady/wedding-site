import React, { ReactElement } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PageUrl } from "./types";
import Home from "./components/pages/Home/Home";

const Router = (): ReactElement => (
  <>
    <BrowserRouter>
      <Switch>
        <Route path={PageUrl.Home}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  </>
);

export default Router;
