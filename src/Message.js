import React from 'react';

function Message (props) {
    const content = props.content;
    const sender = props.sender;

    return (
    <div className="col-container">
        <div className="msg-sender">

            {sender}
        </div>
        <div className="msg-body border border-primary rounded-pill">
            {content}
        </div>
    </div>
    );
}

export default Message;