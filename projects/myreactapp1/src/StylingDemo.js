import React, { Component } from 'react'

class StylingDemo extends Component {
    render() {
        const style = {
            color: "white",
            backgroundColor: "blue",
            padding: "10px",
            fontfamily: "Arial"
        };

        return (
            <div>

                <h1 style={{ color: "red" }}>Namaskara India</h1>
                <h2 style={{ backgroundColor: "lightblue" }}>welcome to bangalore</h2>
                <p style={style}>all is well</p>
                <div><header>The cricket</header></div>

            </div>
        )
    }
}

export default StylingDemo;