import React, {useState} from 'react';

import Message from './Message.js';
import useKeyboardEvent from './useKeyboardEvent.js';

function Chatroom (props) {
    const [messages, setMessages] = useState([]);
    const [input,setInput] = useState('');
    const [numMsgs, setNumMsgs] = useState(0);

    const displayMessages = (inputList) => inputList.map((item)=>
    <li key={item.id}>
        <Message content={item.content} position={item.pos} sender={item.sender} date={item.date}/>
    </li>
    );

    const handleDisplay = () => {
        let newMessages = messages;
        return displayMessages(newMessages);
    }

    const sendMsg = () => {
        let newMessages = messages;
        let newNum = numMsgs;

        let timeSent = getFormattedTime();

        console.log(timeSent);

        newNum++;
        newMessages.push({
            id: 'msg-#' + numMsgs,
            content: input,
            position: 0,
            sender: "You",
            date: timeSent,
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
        
        return hrs + ':' + date.getMinutes() + ' ' + twelveHr;
    }

    useKeyboardEvent('Enter', sendMsg, 'input-field');

    return (
        <div className="chatroom col-container flex-grow">
            <ul>
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