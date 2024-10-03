import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [Sidebar,setSidebar]=useState(false);

  const toggleSidebar =()=>
    setSidebar(prev => !prev);
  

  return (
    <div className='navbar'>
    <div className='logo'>
    <Link to='/'><img src={assets.logo} alt='logo' className='logo' /></Link>
    </div>
    <nav>
    

    <div className='nav-links'>
    <div className='menu-icon' onClick={toggleSidebar}>
    <img src={assets.menu_icon} />
    </div>
    <div className='menulist'>
    <ul>
      
    <Link to='/'><li><a>Home</a></li></Link>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
    </ul>
    </div>
    <ul className={Sidebar?'nav-menu active':'nav-menu'} >
      
        <Link to='/' onClick={toggleSidebar}><li  className='nav-items'><a>Home</a></li></Link>
        <li onClick={toggleSidebar} className='nav-items'><a>About</a></li>
        <li onClick={toggleSidebar} className='nav-items'><a>Contact</a></li>
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
