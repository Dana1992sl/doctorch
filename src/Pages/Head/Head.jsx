import React from 'react'
import { assets } from '../../assets/assets'
import './Head.css'

const Head = () => {
  return (
    <div className='Head'>
    <div className='header-image'>
    
        <img src={assets.header_img}/>
        
        <button type='submit' className='book-btn'>Book appointment</button>
        <div className='header-text'>
        <h1>Welcome to Doctor CH</h1>
        <h2>CALL 119</h2>
        
        
        
        </div>
        
        
        

    
        
    </div>
    
    
   
      
    </div>
  )
}

export default Head
