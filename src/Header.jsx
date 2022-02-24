import React from 'react'
import './Header.css'
import logo from './logo.jpg'

function Header() {
  return (
    <div className='header'>
        <img src={logo} />
        <h1>About</h1>
        <h2>Services</h2>
        <h3>Contact Us</h3>
    </div>
  )
}

export default Header