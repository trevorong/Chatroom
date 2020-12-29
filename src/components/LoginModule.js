import React, {useState} from 'react';

import { Link } from "react-router-dom";

function LoginModule(props) {
  const [username, setUsername] = useState('');

  return (
    <div className="login-module border border-dark rounded">
      <h1> Enter a chatroom: </h1>
      <input type="text" className="form-control" placeholder="Username" onChange={(event)=>setUsername(event.target.value)} value={username} aria-label="Username"></input>
      <Link to= "/room" className="btn btn-primary">Enter a room</Link>
    </div>
  );
}

export default LoginModule;