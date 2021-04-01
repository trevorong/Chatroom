import React, {useEffect, useState, useRef} from 'react';

import Message from './Message.js';
import useKeyboardEvent from './useKeyboardEvent.js';

import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

function Chatroom (props) {
    const { messages, username} = props;
    const numMsgs = props.messages.length;

    const [input, setInput] = useState('');
    const [showEmojis, setShowEmojis] = useState(false);

    const displayMessages = (inputList) => inputList.map((item)=>
      <li key={item.id}>
        <Message {...item} />
      </li>
    );

    const handleDisplay = () => {
        let newMessages = messages.sort((a,b) => (a.id > b.id) ? 1 : -1);
        return displayMessages(newMessages);
    }

    const sendMsg = (input) => {
      setShowEmojis(false);
      if (input !== '') {
          setInput('');
          let timeSent = getFormattedTime();
          const msg = {
              id: numMsgs,
              content: input,
              sender: username,
              date: timeSent,
              timestamp: Date.now(), 
          }
          props.handleSendMsg(msg);
      }
    };

    const sendHappyFace = () => {sendMsg('🤩')};

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
        ? <button type="button" className="btn btn-primary" onClick={() => sendMsg(input)} id="basic-addon1">Send</button>
        : <button type="button" className="btn btn-outline-primary" onClick={sendHappyFace} id="basic-addon1" alt="send smiley">🤩</button>;
    }

    useKeyboardEvent('Enter', () => sendMsg(input), 'input-field');

    const container = useRef(null);
    useEffect(() => {
        container.current.scrollTop = container.current.scrollHeight;
    }, [numMsgs]);

    // const onScrollHandler = (e) => {
    //     const elem = e.target;
    //     const threshold = 20;
    //     if (elem.scrollTop < threshold) {
    //       setNumMsgs(numMsgs+5);
    //     }
    // }

    return (
        <div className="chatroom col-container flex-grow">
            <ul className="msg-list" ref={container}>
                {handleDisplay()}
            </ul>

            {showEmojis && <Picker set='apple' 
              onSelect={(emoji) => setInput(input + emoji.native)} 
              title='' emoji='point_up'
              style={{ 
                position: 'absolute',
                bottom: '80px',
                zIndex: '20',
                maxWidth: '100%',
                width: '300px'
              }} />}

            <div className="input-group mb-3">
                <button type="button" className="btn btn-secondary" onClick={() => setShowEmojis(!showEmojis)} id="basic-addon1">:&#x29;</button>
                <input id="input-field" type="text" className="form-control" onChange={(event)=>setInput(event.target.value)} value={input} placeholder="Aa" aria-label="Message input"/>
                {displaySend()}
            </div>
        </div>
    );
}

export default Chatroom;