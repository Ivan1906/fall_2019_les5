import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { routers, reviewId } from "../routers/routers";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Reviews from "./pages/Reviews";
import Modal from "./Modal";
import Review from "./pages/Review";

const SwitchComponent = () => {
  let location = useLocation();

  let modal = location.state && location.state.prevLocation;

  return (
    <div>
      <Switch location={modal || location}>
        <Route exact path={routers.home} component={Home} />
        <Route path={routers.shop} component={Shop} />
        <Route path={routers.reviews} component={Reviews} />
        <Route path={reviewId} component={Review} />
        <Route />
      </Switch>
      {modal && <Route path="/shop/modal" component={Modal} />}
    </div>
  );
};

export default SwitchComponent;
