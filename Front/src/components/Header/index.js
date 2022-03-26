/* Package imports */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

/* Local imports */

import logo from '../../assets/images/pawswhite.png';
import Burger from './burger/index';
import Menu from './menu/index';


// Components

const Header = ({ logged, role }) => {

  // Burger State
  const [open, setOpen] = useState(false);


  return (
    <div className='header'>
      <div className='container'>
        <div className='container__pawslogo'>
          <NavLink to='/'>
            <img className='container__pawslogo__image' src={logo} alt='logo pawsclub' />
          </NavLink>
        </div>
        <div className='container__nav'>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} logged={logged} role={role} />
        </div>
      </div>
    </div>
  )
};

export default Header;