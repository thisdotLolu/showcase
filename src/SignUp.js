import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'
import './SignUp.css'
import {GrLanguage} from 'react-icons/gr'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { useHistory } from 'react-router-dom'





const SignUp = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [firstname,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const dispatch=useDispatch()
    const history=useHistory()

    const signUp=(e)=>{
        e.preventDefault()
    
        if(!firstname){
            return alert ('Please enter a first name')
        }
        if(!lastName){
            return alert('Please enter a last name')
        }

        auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
            userAuth.user
            .updateProfile({
            displayName:firstname
        }).then(()=>{
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.id,
                displayName:firstname
            }))
            history.push('/account')
        }).catch(err=>alert(err.message))
    })
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
                <h1>Create An Account</h1>
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
                    <label htmlFor='firstName'>
                        First Name</label>
                        <input
                        type='firstName'
                        id='firstName'
                        value={firstname}
                        onChange={(e)=>setFirstName(e.target.value)}
                        />
                    <label htmlFor='LastName'>
                        Last Name</label>
                        <input
                        type='LastName'
                        id='LastName'
                        value={lastName}
                        onChange={(e)=>setLastName(e.target.value)}
                        />
                    <ButtonPrimary name='create account' type='submit' onClick={signUp}/>
                </form>
                <div className='login__divider'>
                    <hr/> <span>OR</span><hr/>
                </div>
                <Link to='/login'>
                <ButtonSecondary name='Sign in'
                // onClick={signIn}
                />
                </Link>
            </div>
    </div>
  )
}

export default SignUp