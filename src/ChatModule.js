import React, {useState} from 'react';
import Chatroom from './Chatroom.js';

function ChatModule() {
  const [rooms, setRooms] = useState([]);
  const [currID, setCurrID] = useState("cr-0");
  const [searchVal, setSearchVal] = useState('');

  const addRoom = () => {
    let newRooms = rooms;
    newRooms.push({
      id: "cr-0",
      content: "bob",
    });

    console.log(newRooms);

    setCurrID("cr-0");
    setRooms(newRooms);
  }

  const showCurrentRoom = () => {
    let currentRoom = rooms;

    currentRoom = rooms.filter((item) => item.id === currID);

    return currentRoom.map((item) =>
      <div key={item.id}>
        {item.content}
      </div>
    )
  }

  return (
      <div className="App">
        <div className="row-container flex-grow"> 
          <div className="col-container border">
            <input type="text" className="form-control" placeholder="Search" onChange={(event)=>setSearchVal(event.target.value)} value={searchVal} aria-label="Search bar"></input>
            <ul> placeholder for list of chatrooms</ul>
          </div>

          <Chatroom/>
          {showCurrentRoom()}
        </div>
      </div>
  );
}

export default ChatModule;