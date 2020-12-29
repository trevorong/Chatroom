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
    <div className="login-module border border-dark rounded">
      <h1> Enter a chatroom: </h1>
      <input type="text" className="form-control" placeholder="Username" onChange={(event)=>setNameVal(event.target.value)} value={nameVal} aria-label="Username"></input>
      {displayEnter()}
    </div>
  );
}

export default LoginModule;