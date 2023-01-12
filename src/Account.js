import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Account.css'





const Account = ({setIsMenuOpen,isMenuOpen}) => {
const user = useSelector(state=>state.user)
console.log(user)

const logout=()=>{
    
}
    return (
    <div className='teslaAccount'>
        {/* {user} */}
        <div className='teslaAccount__header'>
            <div className='teslaAccount__logo'>
            <Link>
            <img
            src='/car-logo.png'
            alt=''
            />
            </Link>
            </div>
            <div className='teslaAccount__links'>
                {/* <Link to='/'>TOYOTA</Link> */}
            <Link to='/'>Toyota</Link>
            <Link to='/'>Honda</Link>
            <Link to='/'>Ford</Link>
            <Link to='/'>Tesla</Link>
            <Link to='/'>Kia</Link>
            <Link to='/'>Lexus</Link>
            <div onClick={logout}>LOGOUT</div>
            <div className='teslaAccountMenu' onClick={()=> setIsMenuOpen(!isMenuOpen)}>
               {isMenuOpen? <FaTimes/>:<FaBars/>} 
            </div>
            </div>
        </div>
        <div className='teslaAccount__info'>
            <div className='teslaAccount__person'>
                <h4>{user?.user.displayName + "'s collection"}</h4>
            </div>
            <div className='teslaAccount__infoRight'>
                <Link>Home Page</Link>
                <Link>Favourites</Link>
                <Link>History</Link>
                <Link onClick={logout}>Sign Out</Link>
            </div>

        </div>
        <div className='teslaAccount__car'></div>
    </div>
  )
}

export default Account;