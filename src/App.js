import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ChatModule from './ChatModule.js';
import LoginModule from './LoginModule.js';

function App() {
  return (
    <Router>
      <nav id="main-navbar" className="navbar fixed-top navbar-dark bg-primary">
        <div className="container-fluid">
          <Link to= "/" className="navbar-brand">uMessage</Link>
        </div>
      </nav>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LoginModule} />
          <Route path="/room"  component={ChatModule} />
          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
