import Message from "./Message"
import React, { useState, useEffect } from 'react';

let Messenger = () => {
    return (
        <div>
            <h1>Messages</h1>
            <Message msg ="Message 1" /><br />
            <Message msg ="How are you" /><br />
            <Message msg ="This is the link to click" /><br />
        </div>
    )
};

export default Messenger;
