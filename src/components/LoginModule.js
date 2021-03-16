import React, {useState} from 'react';

import { Link } from "react-router-dom";

function LoginModule(props) {
  const [nameVal, setNameVal] = useState(props.username);

  const displayEnter = () => {
    return (nameVal !== '')
    ? <Link to= "/room" onClick={() => props.setUsername(nameVal)} className="btn btn-primary">Enter a room</Link>
    : <button disabled className="btn btn-primary">Enter a room</button>
  }

  return (
    <div>
      <h1 id='login-title'>uMessage</h1>
      <div className="login-module border border-dark rounded">
        <h2> Enter a chatroom: </h2>
        <input type="text" className="form-control" placeholder="Username" onChange={(event)=>setNameVal(event.target.value)} value={nameVal} aria-label="Username"></input>
        {displayEnter()}
      </div>
    </div>
  );
}

export default LoginModule;