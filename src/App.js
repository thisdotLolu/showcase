import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { selectUser } from './features/userSlice';
import Header from './Header';
import HeaderBlock from './HeaderBlock';
import Login from './Login';
import Menu from './Menu';
import {useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom';
import SignUp from './SignUp';
import Account from './Account';




function App() {
  const user=useSelector(selectUser)
  const[isMenuOpen, setIsMenuOpen]=useState(false)
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path='/'>
      {/* Header */}
      <Header isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
      />
      {isMenuOpen && <Menu/>}
      {/* HeaderBlock */}
      <HeaderBlock/>
      </Route>
      <Route path='/login'>
        {user? <Redirect to='/account'/>:<Login/>}
        {/* <Login/> */}
      </Route>
      <Route path='/signup'>
        {user? <Redirect to='/account'/>:<SignUp/>}
        {/* <Login/> */}
      </Route>
      <Route path='/account'>
        {user?(
        <>
        {isMenuOpen && <Menu/>}
        <Account
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        />
        </>
        ):<Redirect to='/login'/>}
      </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
