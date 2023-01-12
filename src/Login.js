import React, { useState } from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import {GrLanguage} from 'react-icons/gr'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { useHistory } from 'react-router-dom'




const Login = () => {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const dispatch = useDispatch()
    const history= useHistory()


    const signIn=(e)=>{
        e.preventDefault()

        auth.signInWithEmailAndPassword(email,password).then(userAuth=>{
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
            })
          )
          history.push('/account')
        })
        .catch((err)=>alert(err.message))

    }
  return (
    <div className='login'>
        <div className='login__header'>
            <div className='login__logo'>
                <Link>
                <img src='/car-logo.png' alt='logo'/>
                </Link>
            </div>
            <div className='login__language'>
                <GrLanguage/><span>en US</span>
             
            </div>
        </div>
        <div className='login__info'>
                <h1>Sign In</h1>
                <form className='login__form'>
                    <label htmlFor='email'>Email Address</label>
                    <input type='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <label htmlFor='password'>
                        Password</label>
                        <input
                        type='password'
                        id='password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    <ButtonPrimary name='Sign in' type='submit' onClick={signIn}/>
                </form>
                <div className='login__divider'>
                    <hr/> <span>OR</span><hr/>
                </div>
                <Link to='/signup'>
                <ButtonSecondary name='create account'/>
                </Link>
            </div>
    </div>
  )
}

export default Login