import React from 'react';

function Message (props) {
    const content = props.content;
    const sender = props.sender;
    const date = props.date;
    const position = props.position;

    const displayMessage = () =>
    {
        return position === "right" ?
        <div className="col-container">
            <div className="msg-self msg-sender">
                {sender} {date}
            </div>
            <div className="msg-self msg-body btn btn-primary rounded-pill">
                {content}
            </div>
        </div>
        :
        <div className="col-container">
            <div className="msg-other msg-sender">
                {sender} {date}
            </div>
            <div className="msg-other msg-body btn btn-outline-primary rounded-pill">
                {content}
            </div>
        </div>
    }   

    return displayMessage();
}

export default Message;