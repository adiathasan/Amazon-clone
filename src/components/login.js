import React, { useState } from 'react'
import '../css/login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../config/firebaseConfig'
import { motion } from 'framer-motion/dist/framer-motion'

function Login(props) {
    const routing = useHistory(); 
    const [message, setmessage] = useState(null)
    const [state, setState] = useState({
        email: '',
        password: '',
    })
    const handleChange = e => {
        setState({
            email: e.target.id === 'email' ? e.target.value: state.email,
            password: e.target.id === 'password' ? e.target.value : state.password
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(state.email, state.password)
        .then((auth)=>{
            if (auth) {
                routing.push('/');
            }
        })
        .catch(err => setmessage(err.message))

    }

    const handleRegister = e => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(state.email, state.password)
        .then((auth) => {
            if(auth){
                routing.push('/');
            }
        })
        .catch(err => setmessage(err.message))
    }
    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src="https://purepng.com/public/uploads/medium/amazon-logo-rgp.png" alt=""/>  
            </Link>

            <motion.div layout
                initial={{ opacity: 0, y:'-100vh' }}
                animate={{ opacity: 1, y: 0 }}
                className="login__container">
                <h3>Sign-In</h3>
                {
                    message && <p className='message'>{message}</p>
                }
                <form>
                    <label htmlFor="email">Email</label>
                    <input onChange={handleChange} type="email" id='email' required/>
                    <label htmlFor="password">Password</label>
                    <input onChange={handleChange} type="password" id='password' required/>
                    <button onClick={handleSubmit}>Continue</button>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                    <input type='submit' className='btn' onClick={handleRegister} value='Create your Amazon account'/>
                </form>
            </motion.div>
        </div>
    )
}

export default Login
