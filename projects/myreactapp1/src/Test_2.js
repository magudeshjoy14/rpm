import React from 'react'
import "./test_2.css"

export default function Test_2() {
    return (
        <div>
            <body>
                <header>
                    <div className='head'>
                        <h1>Welcome guys</h1>
                    </div>
                    <aside>
                        <nav className='side'>
                            <ul>
                                <li a href='#'>Home</li>
                                <li a href='#'>About</li>
                                <li a href='#'>Contact Us</li>
                                <li a href='#' className='hi'>Sign in</li>
                            </ul>
                        </nav>
                    </aside>
                    <div className='para'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                </header>
            </body>
        </div>
    )
}
