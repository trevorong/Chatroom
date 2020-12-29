import React, {useEffect, useState, useRef} from 'react';

import Message from './Message.js';
import useKeyboardEvent from './useKeyboardEvent.js';

import db from '../firebase.js';

function Chatroom (props) {
    const [messages, setMessages] = useState([]);
    const [input,setInput] = useState('');
    const [numMsgs, setNumMsgs] = useState(0);

    const username = props.username;

    const displayMessages = (inputList) => inputList.map((item)=>
    <li key={item.id}>
        <Message username={username} content={item.content} sender={item.sender} date={item.date}/>
    </li>
    );

    const handleDisplay = () => {
        let newMessages = messages;
        newMessages.sort((a,b) => (a.id > b.id) ? 1 : -1);
        return displayMessages(newMessages);
    }

    const sendMsg = () => {
        if (input !== '') {
            setInput('');
            let timeSent = getFormattedTime();

            const msg = {
                id: numMsgs,
                content: input,
                sender: username,
                date: timeSent,
            }
            console.log(msg);
            db.collection("messages").add(msg)
                .then((ref) => {console.log("Added doc with ID: ", ref.id)})
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });
        }
    };

    const getFormattedTime = () => {
        let date = new Date();
        let hrs = date.getHours();
        let twelveHr = hrs >= 12 ? "PM" : "AM";
        if (hrs > 12) {
            hrs -= 12;
        } else if (hrs === 0) {
            hrs += 12;
        }

        let mins = date.getMinutes();
        if (mins < 10) {
            mins = "0" + mins;
        }
        
        return hrs + ':' + mins + ' ' + twelveHr;
    }

    const displaySend = () => {
        return input !== '' 
        ? <button type="button" className="btn btn-primary" onClick={sendMsg} id="basic-addon1">Send</button>
        : '';
    }

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
            setNumMsgs(data.length);

            // console.log("messages: ", data)
          });
        
        return () => unsubscribe();
    }, []);

    useKeyboardEvent('Enter', sendMsg, 'input-field');

    const container = useRef(null);
    useEffect(() => {
        container.current.scrollTop = container.current.scrollHeight;
    }, [numMsgs]);

    return (
        <div className="chatroom col-container flex-grow">
            <ul className="msg-list" ref={container}>
                {handleDisplay()}
            </ul>

            <div className="input-group mb-3">
                <input id="input-field" type="text" className="form-control" onChange={(event)=>setInput(event.target.value)} value={input} placeholder="Aa" aria-label="Message input"/>
                {displaySend()}
            </div>
        </div>
    );
}

export default Chatroom;