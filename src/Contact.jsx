import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <h1>We would <span>love to talk<br/> with you!</span></h1>
      <p>You want to ask something to us, just<br/> by clicking the
         button next to it and<br/> contact us directly.</p>
      <div className='contact__button'><span>Contact Us</span></div>
    </div>
  )
}

export default Contact