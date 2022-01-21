/* Package imports */
import React from 'react';
import { NavLink } from 'react-router-dom';

/* Local imports */
import logo from '../../assets/images/pawslogo1.png'
import Home from '../Home';

// Components

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='container__pawslogo'>
          <NavLink to='/'>
            <img className='container__pawslogo__image' src={logo} alt='logo pawsclub' />
          </NavLink>
        </div>
        <div className='container__nav'>
            <span />
						<span />
						<span />
        </div>
      </div>
    </div>
  )
};

export default Header;