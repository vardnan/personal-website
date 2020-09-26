import React from "react";
import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import UoM from "./pages/UoM";
import Antler from "./pages/Antler";
import ProductDesign from "./pages/ProductDesign";
import NordicImpact from "./pages/NordicImpact";
import MobileWebDevelopment from "./pages/MobileWebDevelopment";
import Jor from "./pages/Jor";
import About from "./pages/About";

const Main = () => {
  return (
    <AnimatePresence initial={true} exitBeforeEnter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/uom" component={UoM}></Route>
        <Route exact path="/antler" component={Antler}></Route>
        <Route exact path="/product-design" component={ProductDesign}></Route>
        <Route exact path="/nordic-impact" component={NordicImpact}></Route>
        <Route
          exact
          path="/mobile-web-development"
          component={MobileWebDevelopment}
        ></Route>
        <Route exact path="/jor" component={Jor}></Route>
        <Route exact path="/about" component={About}></Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Main;
