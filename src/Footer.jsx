import React from 'react'
import './Footer.css'
import ViewKanbanIcon from '@mui/icons-material/ViewKanban'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';


function Footer() {
  return (
    <div className='footer'>
      <div className='footer__logo'>
        <ViewKanbanIcon />
        <h2>Saro oil Palm</h2>
        <p>Learn about us and how we can help you with<br/> 
           loans to rehabilitate your home and sell. Also<br/>
           learn about our works.
        </p>
         <div className='footer__link'>
            <h1>Links</h1>
            <h2>Home</h2>                     
            <h2>About us</h2>                     
            <h2>Contact us</h2>                     
         </div>
         <div className='footer__about'>
            <h1>About</h1>
            <h2>About Saro Oil Palm</h2>                     
            <h2>Management Team</h2>                     
            <h2>Our values</h2>                     
         </div>
         <div className='footer__address'>
            <h1>Our Office</h1>
            <h2>Address</h2>                                         
            <h2>Address</h2>                                         
         </div>
         <div>
             <div className='facebook'><FacebookIcon /></div>
             <div className='instagram'><InstagramIcon/></div>
             <div className='twitter'><TwitterIcon/></div> 
             <div className='mail'><EmailIcon/></div> 
         </div>
      </div>
        
    </div>
  )
}

export default Footer