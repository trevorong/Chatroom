import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ChatModule from './ChatModule.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/room"  component={ChatModule} />
        <Route render={() => <h1>404: page not found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;

const Home = () => (
  <div className="App border border-primary rounded">
    <h1> Placeholder Home Page </h1>
    <input type="text" className="form-control" placeholder="Username" aria-label="Username"></input>
    <input type="text" className="form-control" placeholder="Password" aria-label="Password"></input>
    <Link to="/room">Enter a room</Link>
  </div>
);