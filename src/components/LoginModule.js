import React, {useEffect, useState} from 'react';

import { Link } from "react-router-dom";

function LoginModule(props) {
  const [nameVal, setNameVal] = useState(props.username);

  useEffect(() => { props.setUsername(nameVal) });

  const displayEnter = () => {
    return nameVal !== '' 
    ? <Link to= "/room" className="btn btn-primary">Enter a room</Link>
    : <button className="btn btn-primary" disabled>Enter a room</button>
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