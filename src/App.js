import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  // const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route path="/" exact>
            <Login />
          </Route>
          {user ? (
            <Route exact path="/home">
              <Header />
              <Home />
            </Route>
          ) : (
            <Route path="/">
              <Login />
            </Route>
          )} */}
          <Route path="/" exact>
            <Login />
          </Route>
          <Route>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
