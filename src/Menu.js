import React from 'react'
import MenuItem from './MenuItem'
import './Menu.css'


const Menu = () => {
  return (
    <div className='menu'>
        <h2>TOYOTA</h2>
        <MenuItem title='Toyota Corolla'/>
        <MenuItem title='Toyota Avalon '/>
        <MenuItem title='Toyota Camry'/>
        <MenuItem title='Toyota Prius'/>
        {/* <MenuItem title='Toyota s'/> */}
        <h2>HONDA</h2>
        <MenuItem title='Honda Civic '/>
        <MenuItem title='Honda '/>
        <MenuItem title='existing '/>
        <MenuItem title='existing '/>
        <MenuItem title='existing '/>
        <h2>LEXUS</h2>
        <MenuItem title='existing '/>
        <MenuItem title='existing '/>
        <MenuItem title='existing '/>
        <MenuItem title='existing '/>
        <MenuItem title='existing '/>
        <h2>KIA</h2>
        <MenuItem title='existing '/>
        <MenuItem title='existing '/>
        <MenuItem title='existing '/>
        <MenuItem title='existing '/>
        <MenuItem title='existing '/>
        <h2>LEXUS</h2>
        <MenuItem title='existing '/>
        <MenuItem title='existing '/>
        <MenuItem title='existing '/>
        <MenuItem title='existing '/>
        <MenuItem title='existing '/>
        <h2>TESLA</h2>
        <MenuItem title='existing '/>
        <MenuItem title='existing '/>
        <MenuItem title='existing '/>
        <MenuItem title='existing '/>
        <MenuItem title='existing '/>
        <h2>FORD</h2>
        <MenuItem title='existing'/>
        <MenuItem title='existing'/>
        <MenuItem title='existing'/>
        <MenuItem title='existing'/>
        <MenuItem title='existing'/>
    </div>
  )
}

export default Menu