import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "../components/routes";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { Shop } from "../components/shop/Shop";
import { Reviews } from "../components/reviews/Reviews";
import { SingleReview } from "../components/reviews/SingleReview";

export const App = () => (
  <BrowserRouter>
    <Route exact path={["/", "/shop/", "/reviews/"]}>
      <Header />
    </Route>
    <Switch>
      <Route exact path={routes.HOME} component={Home} />
      <Route exact path={routes.SHOP} component={Shop} />
      <Route exact path={routes.REVIEWS} component={Reviews} />
      <Route path={routes.REVIEW} component={SingleReview} />
    </Switch>
  </BrowserRouter>
);
