import React, { Component } from 'react'

export default class challenge5 extends Component {
    render() {
        return (
            <div className='ul container name'>
                <div className='comment'></div>

                <a href="/" className="avatar">
                    <img src="download2.jpg"></img></a>

                <div className="content">
                    <a href="/" className="author">sam</a>
                    
                    <div className="metadata">
                        <div className="date">Today at 6.00 pm</div>
                    </div>
                    <div className="text"> nice blog post!</div>
                </div>
            </div>
        )
    }
}
