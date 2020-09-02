import React from "react";
import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../pages/Home";
import UoM from "../pages/UoM";
import Antler from "../pages/Antler";
import ProductDesign from "../pages/ProductDesign";
import NordicImpact from "../pages/NordicImpact";

const Main = () => {
  return (
    <AnimatePresence initial={true} exitBeforeEnter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/UoM" component={UoM}></Route>
        <Route exact path="/Antler" component={Antler}></Route>
        <Route exact path="/Product-Design" component={ProductDesign}></Route>
        <Route exact path="/Nordic-Impact" component={NordicImpact}></Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Main;
