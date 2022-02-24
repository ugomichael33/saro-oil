import React from 'react'
import './Service.css'
import palmfruit from './palmfruit.jpg'

function Service() {
  return (
    <div className='service'>
      <img src={palmfruit} />
      <h1>what we offer</h1>
      <h2>Our Value Offering </h2>
      <h3>With consumers at the heart of our business, we re focused on<br/> 
          complying with RSPO standards in production of:
      </h3>
      <h4>Top Quality Palm Oil</h4>
      <h3>Crude & refined, planted and processed to meet the consumer and<br/> 
          industry needs.
      </h3>
      <h4>Top quality PKO</h4>
      <h3>Crude & refined, as Industrial feed for both local and global<br/> market</h3>
      <h4>Crude Palm Kernel Cake </h4>
      <h3>As Industrial feed for both local and global market</h3>
      <div className='service__button'><span>Learn More</span></div>
    </div>
  )
}

export default Service