import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
