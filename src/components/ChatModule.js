import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Chatroom from './Chatroom.js';

function ChatModule(props) {
  // const [searchVal, setSearchVal] = useState('');

  const history = useHistory();
  const username = props.username;

  useEffect(() => {
    if (username === '') history.push('/');
  })

  return (
    <div className="chat-module row-container flex-grow"> 
      <div className="chats-list hide-mobile col-container border">
        <div className="rounded border">
          Chatting as: "{username}"
        </div>
        {/* <input type="text" className="form-control" placeholder="Search messages" onChange={(event)=>setSearchVal(event.target.value)} value={searchVal} aria-label="Search bar"></input> */}
        {/* <ul> placeholder for list of chats</ul> */}
      </div>

      <Chatroom {...props}/>
    </div>
  );
}

export default ChatModule;