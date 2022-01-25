/* Package imports */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

/* Local imports */

import logo from '../../assets/images/pawswhite.png';
import Burger from './burger/index';


// Components

const Header = () => {

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
        </div>
      </div>
    </div>
  )
};

export default Header;