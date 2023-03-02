import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
 

const Navbar = () => {

const navigate = useNavigate();

  return (
    <>
    <div className='navbar'>
    <h1>Shopping App</h1>

    <div className='navigate'>
    <a href='/'> Home</a>
    <a href='#'> Products</a>
    <a href='#'> Packages</a>
    <a href='#'> Contact</a>
    <button onClick={() => navigate('/signup')} className='login' >LogIn</button>
    </div>

    </div>

   
    </>
  )
}

export default Navbar