import React from 'react';

function Message (props) {
    const content = props.content;
    const sender = props.sender;
    const date = props.date;

    return (
        <div className="col-container">
            <div className="msg-sender">
                {sender} {date}
            </div>
            <div className={`msg-body btn btn-primary rounded-pill`}>
                {content}
            </div>
        </div>
    );
}

export default Message;