import React from 'react'
import Header from './Header';

const StyleDemo2 = (hello) => {
    return (
        <div style={{
            "backgroundColor": "DodgerBlue",
            "padding": "10px",
            "fontfamily": "Arial"
        }}>
            <p>{hello.msg}</p>
        </div>
    )
}

export default StyleDemo2;