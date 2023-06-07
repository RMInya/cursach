import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";
import { MainPage } from "./pages/MainPage";
import { ConsultPage } from "./pages/ConsultPage";
import { MarketPage } from "./pages/MarketPage";
import { InstrumentMarketPage } from "./pages/InstrumentMarketPage";
import { FurnitureMarketPage } from "./pages/furnitureMarketPage";
import { MaterialsMarketPage } from "./pages/materialsMarketPage";

export const useRoutes = (IsAuthenticated) => {
  if (IsAuthenticated) {
    return (
      <Switch>
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/consult" component={ConsultPage} />
        <Route exact path="/market" component={MarketPage} />
        <Route exact path="/instruments" component={InstrumentMarketPage} />
        <Route exact path="/furniture" component={FurnitureMarketPage} />
        <Route exact path="/materials" component={MaterialsMarketPage} />
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
