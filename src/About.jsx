import React from 'react'
import './About.css'
import worker from './workerpic.png'
import palmheap from './palmheap.png'


function About() {
  return (
    <div className='about'>
      <h1>About Us</h1>
      <h2>Learn more about<br/> <span>Saro Oil Palm</span></h2>
      <p>Saro Oil Palm, still a project under Saro Africa<br/>
         International is currently being supervised by the<br/>
         Saroafrica Board.
       </p>
       <div className='about__button'><span>View Our Management Team</span></div>
       <div className='about__image'>
         <img src={worker} />
       </div>
       <div className='about__heap'>
         <img src={palmheap} />
       </div>
    </div>
  )
}

export default About