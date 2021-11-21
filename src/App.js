import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

import NotFound from "./Components/NotFound";
const Convent = lazy(() => import("./Components/converter/Converter.js"));
const Main = lazy(() => import("./Components/main/Main"));
const Rates = lazy(() => import("./Components/rates/Rates"));

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/convent" component={Convent} />
        <Route exact path="/rates" component={Rates} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
