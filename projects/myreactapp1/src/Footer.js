import React from 'react'
import './FooterStyle.css';
import { BiCopyright } from 'react-icons/bi';
import { BsWhatsapp } from 'react-icons/bs';

export default function Footer() {
  return (
    <div className='footer'>
      <BiCopyright className='copy' />
      <p className='para'>2023-career</p>
      <div className='right'>
        <button className='chat' name="subject" type="chat" value="chat">need help? chat with us</button>
        <BsWhatsapp className='what' />
      </div>
    </div>
  )
}
