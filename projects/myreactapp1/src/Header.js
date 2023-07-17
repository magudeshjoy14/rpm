import React from 'react'
import './HeaderStyle.css';

export default function Header() {
  return (
    <div className="Header">
      <div className='header-right'>

        <a class="active" href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">About</a>
        <a href="#">Job support</a>
        <a href="#" className='last'>Pay Fee</a>
        <a href="#" className='sign'>Sign In</a>
        <button className='button'>Sign up</button>
      </div>
    </div>
  )
}
