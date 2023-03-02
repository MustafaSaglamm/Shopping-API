import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext'


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {createUser} = UserAuth();
    const navigate = useNavigate ();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try{
            await createUser(email, password);
            navigate('/account')
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    }

  return (
    <div className='signuppage'>
    <div className='signupcard'>
        <div>
            <h1>Shopping App</h1>
            <h2>Sign up for a free account</h2>
            <p>Already have an account yet? <Link to='/signin'>Sign In.</Link> </p>
        </div>


        <form className='signupform' onSubmit={handleSubmit}>
            <div className='signupemail'>
                <label>Email Address</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" />
            </div>
  
            <div className='signuppass'>
                <label>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" />
            </div>
            <button>Sign Up</button>
        </form>

        <div className="socialcard">
              <AiOutlineTwitter className="icon"/>
              <AiFillYoutube className="icon"/>
              <AiFillInstagram className="icon"/>
              <FaTripadvisor className="icon"/>
            </div>

    </div>
    </div>
  )
}



export default Signup