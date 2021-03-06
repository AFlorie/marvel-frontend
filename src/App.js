import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./containers/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Character from "./containers/Character";
import Comics from "./containers/Comics";
import Favorite from "./containers/Favorite";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faBackward,
  faForward,
} from "@fortawesome/free-solid-svg-icons";
library.add(faSearch, faBackward, faForward);

function App() {
  return (
    <>
      <Header />
      <Router>
        <NavBar />
        <Switch>
          <Route path="/character/:id">
            <Character />
          </Route>
          <Route path="/comics">
            <Comics />
          </Route>
          <Route path="/favoris">
            <Favorite />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
