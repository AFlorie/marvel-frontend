import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./containers/Home";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Character from "./containers/Character";
import Comics from "./containers/Comics";

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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
