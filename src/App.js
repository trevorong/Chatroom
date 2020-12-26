import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ChatModule from './ChatModule.js';
import LoginModule from './LoginModule.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginModule} />
        <Route path="/room"  component={ChatModule} />
        <Route render={() => <h1>404: page not found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
