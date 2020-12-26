import React from 'react';

function Message (props) {
    const content = props.content;
    const sender = props.sender;
    const date = props.date;
    const position = props.position;

    return (
        <div className="col-container">
            {position === "right" ?
                <div className="msg-self">
                    <div className="msg-sender">
                        {sender} {date}
                    </div>
                    <div className={`msg-body btn btn-primary rounded-pill`}>
                        {content}
                    </div>
                </div>
                :
                <div className="msg-other">
                    <div className="msg-sender">
                        {sender} {date}
                    </div>
                    <div className={`msg-body btn btn-primary rounded-pill`}>
                        {content}
                    </div>
                </div>
            }
        </div>
    );
}

export default Message;