import React, { Component } from 'react'
import './test.css'

export default class Testing extends Component {
    render() {
        return (
            <main>
                <header>
                    <div className='head'>Transition</div>
                    <aside className='side'>
                        <ul>
                            <li><a href="https://www.google.com/webhp?authuser=1">Home</a></li>
                            <li><a href="#">About_us</a></li>
                            <li><a href="#">help us</a></li>
                            <li><a href="#" className='hi'>contact</a></li>
                        </ul>
                    </aside>
                    <div className='content'>
                        <h2>What is Lorem Ipsum?</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                    </div>
                </header>
            </main>
        )
    }
}
