import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Peasy from '../assets/peasy.png';

const Header = () => {
  return (
    <div>
      <div className="header">
        <Link to="/"><img src={Peasy} alt="peasy" id="header-logo" /></Link> 
        <div className='header-left-space'> 
          <Link to="/user" className="header-left">Demo</Link> 
          <Link to="/login" className="header-left"> Login </Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Header;
