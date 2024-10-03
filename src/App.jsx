import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './NavBar/Navbar'
import './NavBar/Navbar.css'
import Appoint from './Pages/Appoint/Appoint'
import Head from './Pages/Head/Head'

const App = () => {
  return (
    <>
    <div className='app'>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Head/>} />
    <Route path='/Appoint' element={<Appoint/>}/>

    </Routes>
    
    </div>
    </>
  )
}

export default App
