import React from 'react'
import "./test.css"

export default function Test2() {
  return (
    <main>
      <header>
        <div className='logo'>Transition</div>
        <nav>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Info</a></li>
            <li><a href='#'>Signin</a></li>
            <li><a href='#' className='download2'>Exit</a></li>
          </ul>
        </nav>
        <div className='content'>
          <h2>What is Lorem Ipsum?</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </header>

      <section>
        <div className='all_about'>
          <div className='about'>
            <div className='full'>
              <div className='images'>
                <img src="download2.jpg" alt='nature' height="400px" width="200px"></img>
              </div>
              <div className='content_1'>
                <p>Magudesh knowns to play volleyball, cricket and Table tennis and a good sports player.</p>
              </div>
            </div>
            <div className='full'>
              <div className='images'>
                <img src='download2.jpg' alt='nature'></img>
              </div>
              <div className='content_1'>
                <p>Magudesh knowns to play volleyball, cricket and Table tennis and a good sports player.</p>
              </div>
            </div>
            <div className='full'>
              <div className='images'>
                <img src='download2.jpg' alt='nature'></img>
              </div>
              <div className='content_1'>
                <p>Magudesh knowns to play volleyball, cricket and Table tennis and a good sports player.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main >
  )
}
