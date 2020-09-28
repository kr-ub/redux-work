import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/create";

export default function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </ConnectedRouter>
  );
}
