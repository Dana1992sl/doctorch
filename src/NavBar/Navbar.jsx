import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
    <nav>
    <img src={assets.logo} alt='logo' className='logo' />
    <ul className='nav-links'>
        <li><a>Home</a></li>

    </ul>



    </nav>
      
    </div>
  )
}

export default Navbar
