import React, {useEffect, useState, useRef} from 'react';

import Message from './Message.js';
import useKeyboardEvent from './useKeyboardEvent.js';

import db from './firebase.js';

function Chatroom (props) {
    const [messages, setMessages] = useState([]);
    const [input,setInput] = useState('');
    const [numMsgs, setNumMsgs] = useState(0);

    const displayMessages = (inputList) => inputList.map((item)=>
    <li key={item.id}>
        <Message content={item.content} position={item.position} sender={item.sender} date={item.date}/>
    </li>
    );

    const handleDisplay = () => {
        let newMessages = messages;
        return displayMessages(newMessages);
    }

    const sendMsg = () => {
        let newMessages = messages;
        let timeSent = getFormattedTime();
        let newNum = numMsgs;
        newNum++;

        const msg = {
            id: 'msg-#' + numMsgs,
            content: input,
            position: "right",
            sender: "You",
            date: timeSent,
        }
        newMessages.push(msg);
        db.collection("messages").add(msg)
            .then((ref) => {console.log("Added doc with ID: ", ref.id)})
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });

        setMessages(newMessages);
        setNumMsgs(newNum);
        setInput('');

        console.log(messages);
    }

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

            console.log("messages: ", data)
          });
    }, []);

    useKeyboardEvent('Enter', sendMsg, 'input-field');

    const container = useRef(null);
    useEffect(() => {
        container.current.scrollTop += 100;
    }, [sendMsg]);

    return (
        <div className="chatroom col-container flex-grow">
            <ul className="msg-list" ref={container}>
                {handleDisplay()}
            </ul>

            <div className="input-group mb-3">
                <input id="input-field" type="text" className="form-control" onChange={(event)=>setInput(event.target.value)} value={input} placeholder="Aa" aria-label="Message input" aria-describedby="basic-addon1"/>

                <button type="button" className="btn btn-primary" onClick={sendMsg} id="basic-addon1">Send</button>
            </div>
        </div>
    );
}

export default Chatroom;