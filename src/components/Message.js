import React from 'react';

function Message (props) {
    const content = props.content;
    const sender = props.sender;
    const date = props.date;
    const username = props.username;

    const emoji_regex = /^\s*\p{Extended_Pictographic}\s*$/u;
    const position = (sender === username) ? "msg-self" : "msg-other";
    const style = (position === "msg-self") ? "msg-primary" : "msg-outline-primary";

    const displayMessage = () =>
    {
        return emoji_regex.test(content) ?
        <div className="col-container">
            <div className={`${position} msg-sender`}>
                {sender} {date}
            </div>
            <div className={`${position} msg-body`}>
                {content}
            </div>
        </div>
        :
        <div className="col-container">
            <div className={`${position} msg-sender`}>
                {sender} {date}
            </div>
            <div className={`${position} msg-body msg-text ${style} rounded`}>
                {content}
            </div>
        </div>
    }   

    return displayMessage();
}

export default Message;