import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Chatroom from './Chatroom.js';

import db from '../firebase.js';

function ChatModule(props) {
  const [searchVal, setSearchVal] = useState('');

  const history = useHistory();
  const username = props.username;

  // redirect to home
  useEffect(() => {
    if (username === '') history.push('/');
  })

  // Get message data from firestore
  useEffect(() => {
    const unsubscribe = db
      .collection("messages")
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(data);
      });
    
    return () => unsubscribe();
  }, []);

  const [messages, setMessages] = useState([]);

  const handleSendMsg = (msg) => {
    console.log(msg);
    db.collection("messages").add(msg)
      .then((ref) => {console.log("Added doc with ID: ", ref.id)})
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
  };

  const filterMsgs = () => {
    let newList = messages;
    if (searchVal !== '') {
      newList = messages.filter(item => matchesSearchVal(item));
      // if (newList.length < 1) {
      //   return (<li>no messages match your search :((</li>);
      // }
    }
    return newList;
  }

  const matchesSearchVal = (item) => {
    const msgContent = item.content ? item.content.toUpperCase() : '';
    return msgContent.indexOf(searchVal.toUpperCase()) !== -1;
  }

  return (
    <div className="chat-module row-container flex-grow"> 
      <div className="chats-list hide-mobile col-container border">
        <div className="rounded border">
          Chatting as: "{username}"
        </div>
        <br/>
        <input type="text" className="form-control" placeholder="Search messages" onChange={(event)=>setSearchVal(event.target.value)} value={searchVal} aria-label="Search bar"></input>
        {/* <ul> placeholder for list of chats</ul> */}
      </div>

      <Chatroom {...props} handleSendMsg={handleSendMsg} messages={filterMsgs()}/>
    </div>
  );
}

export default ChatModule;