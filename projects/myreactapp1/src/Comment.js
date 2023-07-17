import React from 'react';
import "./commentscss.css";
import { faker } from '@faker-js/faker';

const Comment_Detail = (props) => {
    return (
        <div className="ul container name">
            <div className="comment"></div>

            <a href="/" className="avatar">
                <img src="faker.image.avatar" alt="avatar"></img></a>

            <span className="content">
                <a href="/" className="author">{props.name}</a>

                <span className="metadata">
                    <span className="date">today at 6.00 pm</span>
                </span>
                <div className="text"> nice blog post!</div>
            </span>
        </div>
    )
}

export default Comment_Detail;