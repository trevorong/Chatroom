import './App.css';

import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ChatModule from './components/ChatModule.js';
import LoginModule from './components/LoginModule.js';

import db from './firebase.js';

function App() {
  const [username, setUsername] = useState('test');

  return (
    <Router>
      <nav id="main-navbar" className="navbar fixed-top navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to= "/" className="navbar-brand">uMessage</Link>
          <a href="https://github.com/tr89on" className="navbar-text">
            made by Trevor Ong
          </a>
        </div>
      </nav>
      <div className="App">
        <Switch>
          <Route path="/" exact render={()=> <LoginModule setFunc={setUsername} />} />
          <Route path="/room"  render={()=> <ChatModule username={username}/>} />
          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
