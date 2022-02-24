import React from 'react'
import palm from './assets/palm.png'
import './Main.css'

function Main() {
  return (
    <div className='main'>
      <div>
        <img src={palm} />
        <div className='patch'></div>
      </div>
      
      <div className='title'>Saro Oil Palm</div>
      <div className='main__button'></div>
    </div>
  )
}

export default Main