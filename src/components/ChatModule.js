import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Chatroom from './Chatroom.js';

function ChatModule(props) {
  const [searchVal, setSearchVal] = useState('');

  const history = useHistory();

  useEffect(() => {
    if (props.username === '') history.push('/');
  })

  return (
    <div className="chat-module row-container flex-grow"> 
      <div style={{display:"none"}} className="chats-list hide-mobile col-container border">
        <input type="text" className="form-control" placeholder="Search" onChange={(event)=>setSearchVal(event.target.value)} value={searchVal} aria-label="Search bar"></input>
        <ul> placeholder list of chats</ul>
      </div>

      <Chatroom {...props}/>
    </div>
  );
}

export default ChatModule;