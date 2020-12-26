import React, {useState} from 'react';

import { Link } from "react-router-dom";

function LoginModule() {
  const [nameVal, setNameVal] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <div className="login-module border border-primary rounded">
        <h1> Chat App </h1>
        <input type="text" className="form-control" placeholder="Username" onChange={(event)=>setNameVal(event.target.value)} value={nameVal} aria-label="Username"></input>
        <input type="text" className="form-control" placeholder="Password" onChange={(event)=>setPassword(event.target.value)} value={password} aria-label="Password"></input>
        <Link to= "/room">Enter a room</Link>
      </div>
    </div>
  );
}

export default LoginModule;