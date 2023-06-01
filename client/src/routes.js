import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";
import { MainPage } from "./pages/MainPage";
import { ConsultPage } from "./pages/ConsultPage";
import { UserPage } from "./pages/UserPage";
import { MarketPage } from "./pages/MarketPage";

export const useRoutes = (IsAuthenticated) => {
  if (IsAuthenticated) {
    return (
      <Switch>
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/consult" component={ConsultPage} />
        <Route exact path="/profile" component={UserPage} />
        <Route exact path="/market" component={MarketPage} />
        <Redirect to="/main" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route exact path="/" component={AuthPage} />
      <Redirect to="/" />
    </Switch>
  );
};
