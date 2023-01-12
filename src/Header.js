import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import {FaBars} from 'react-icons/fa'
import {GrFormClose} from 'react-icons/gr'




const Header = ({isMenuOpen,setIsMenuOpen}) => {
  return (
    <div className='header'>
        <div className='header__logo'>
            <Link to='/'>
                <img 
                className='header__logoImg'
                alt='logo'
                src='/car-logo.png'/>
            </Link>
        </div>
        <div className='header__links'>
            <Link to='/'>Toyota</Link>
            <Link to='/'>Honda</Link>
            <Link to='/'>Ford</Link>
            <Link to='/'>Tesla</Link>
            <Link to='/'>Kia</Link>
            <Link to='/'>Lexus</Link>
        </div>
        <div className='header__right'>
            <Link to='/'
            className={isMenuOpen && 'header__link--hidden'}
            >Shop</Link>
            <Link 
            className={isMenuOpen && 'header__link--hidden'}
            to='/login'>Account</Link>
            <div className='header__menu' onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen? <GrFormClose
                style={{cursor:'pointer',zIndex:'2'}}
                fontSize={25}
                />:<FaBars
                style={{cursor:'pointer',zIndex:'2'}}
                fontSize={20}
                />}
            </div>
        </div>
    </div>
  )
}

export default Header