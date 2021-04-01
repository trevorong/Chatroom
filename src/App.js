import './App.css';

import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ChatModule from './components/ChatModule.js';
import LoginModule from './components/LoginModule.js';

function App() {
  const getUsername = () => {
    const store = window.localStorage;
    const name = store.getItem('umessage-name')

    console.log(`${name} has entered the room`);

    return name ? name : '';
  }

  const [username, setUsername] = useState(getUsername());

  useEffect(() => {
    const store = window.localStorage;
    store.setItem('umessage-name', username);

    console.log(`set username to ${username}`)
  }, [username])

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
          <Route path="/" exact render={()=> <LoginModule username={username} setUsername={setUsername} />} />
          {/* <Route path="/profile" exact render={()=> <ProfileModule username={username}/>} /> */}
          <Route path="/room"  render={()=> <ChatModule username={username}/>} />
          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
