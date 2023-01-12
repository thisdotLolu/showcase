import React from 'react'
import './HeaderBlock.css'


const HeaderBlock = () => {
  return (
    <div className='headerBlock'>
        <div className='headerBlock__info'>
            <div className='headerBlock__infoText'>
                <h1>Find Your Favorite Car !</h1>
                <h4>Explore various categories of <span> Automobile Beauty</span></h4>
            </div>
            <div className='headerBlock__actions'>
                <button className='headerBlock__buttonPrimary'> &lt; 2010</button>
                <button className='headerBlock__buttonPrimary'> 2011 - Latest Models</button>
            </div>
        </div>
    </div>
  )
}

export default HeaderBlock