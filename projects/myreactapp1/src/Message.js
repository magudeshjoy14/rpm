import React from 'react'

const Message = (props) => {
    return (
        <div style={{
            "width": "300px",
            "height": "100px",
            "padding": "15px",
            "background-color": "blue",
            "box-shawdow": "1px 1px 1px 1px"
        }}>
            <p>{props.msg}</p>
        </div>
    )
}

export default Message;