import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {signIn} = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await  signIn(email, password)
            navigate('/account')
        } catch(e){
            setError(e.message)
            console.log(e.message)
        }
    }

  return (
    <div className='signinpage'>
    <div className='signincard'>
    <div>
        <h1>Sign in to your account</h1>
        <p>Don't have an account yet? <Link to='/signup'>Sign Up.</Link> </p>
    </div>


    <form className='signinform' onSubmit={handleSubmit}>
        <div className='signinemail'>
            <label>Email Address</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" />
        </div>

        <div className='signinpass'>
            <label>Password</label>
            <input onChange={(e) => setPassword(e.target.value) } type="password" />
        </div>
        <button>Sign In</button>
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

export default Signin