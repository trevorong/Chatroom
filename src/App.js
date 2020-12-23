import './App.css';

import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
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
  <div>
    <h1> Placeholder Home Page </h1>
    <Link to="/room">Enter a room</Link>
  </div>
);