import './App.css';

import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import ChatModule from './ChatModule.js';

function App() {
  // const [rooms, setRooms] = useState([]);
  // const [currID, setCurrID] = useState("cr-0");
  // const [searchVal, setSearchVal] = useState('');

  // const addRoom = () => {
  //   let newRooms = rooms;
  //   newRooms.push({
  //     id: "cr-0",
  //     content: "bob",
  //   });

  //   console.log(newRooms);

  //   setCurrID("cr-0");
  //   setRooms(newRooms);
  // }

  // const showCurrentRoom = () => {
  //   let currentRoom = rooms;

  //   currentRoom = rooms.filter((item) => item.id === currID);

  //   return currentRoom.map((item) =>
  //     <div key={item.id}>
  //       {item.content}
  //     </div>
  //   )
  // }

  return (
    <Router>
      {/* <div className="App">
        <div className="row-container flex-grow"> 
          <div className="col-container border">
            <input type="text" className="form-control" placeholder="Search" onChange={(event)=>setSearchVal(event.target.value)} value={searchVal} aria-label="Search bar"></input>
            <ul> placeholder for list of chatrooms</ul>
          </div>

          <Chatroom/>
          {showCurrentRoom()}
        </div>
      </div> */}

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/room"  component={ChatModule} />
        <Route render={() => <h1>404: page not found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;

const Home = () => (
  <div>
    <h1> Placeholder Home Page </h1>
    <Link to="/room">Enter a room</Link>
  </div>
);