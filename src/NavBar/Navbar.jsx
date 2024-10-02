import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {

  return (
    <div className='navbar'>
    <div className='logo'>
    <img src={assets.logo} alt='logo' className='logo' />
    </div>
    <nav>
    

    <div className='nav-links'>
    <ul >
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
    </ul>
    </div>

    </nav>
    <div className='search-bar'>
            <input type='text' placeholder='Search' />
            <button>Search</button>
        </div>
      
    </div>
  )
}

export default Navbar
