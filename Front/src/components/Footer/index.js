/* Package imports */
import React from 'react';
import { NavLink } from 'react-router-dom';

/* Local imports */
import logo from '../../assets/images/pawslogo1.png';
import Social from '../Social';
// Components

const Footer = () => {
  return(
    <div className='footer'>
      <div className='container'>
        <div className='container__pawslogo'>
          <NavLink to='/'>
            <img className='container__pawslogo__image' src={logo} alt='logo pawsclub'/>
          </NavLink>
        </div>
        <div className='container__social'>
          <Social />
        </div>
        <div className='container__nav'>
          <div className='container__nav__title'>
            NAVIGATION
          </div>
            <NavLink to='/'>
              <div className='container__nav__items'>
                home
              </div>
            </NavLink>
            <NavLink to='#'>
              <div className='container__nav__items'>
                news
              </div>
            </NavLink>
            <NavLink to='#'>
              <div className='container__nav__items'>
                roster
              </div>
            </NavLink>
            <NavLink to='#'>
              <div className='container__nav__items'>
                streams
              </div>
            </NavLink>  
        </div>
        <div className='container__law'>
          <div className='container__law__desc'>
            Copyright © Paws. All rights reserved.
          </div>
          <NavLink to='#'>
            <div className='container__law__link'>
              TERMS
            </div>
          </NavLink>
          <NavLink to='#'>
            <div className='container__law__link'>
              PRIVACY POLICY
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
};

export default Footer;