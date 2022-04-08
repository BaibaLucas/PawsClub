/* Package imports */
import React from 'react';
import { NavLink } from 'react-router-dom';

/* Local imports */
import logo from '../../assets/images/pawswhite.png';
import Social from '../Social';
// Components

const Footer = ({ logged }) => {
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
            <NavLink to='/news'>
              <div className='container__nav__items'>
                news
              </div>
            </NavLink>
            <NavLink to='/roster'>
              <div className='container__nav__items'>
                roster
              </div>
            </NavLink>
            <NavLink to='/streams'>
              <div className='container__nav__items'>
                streams
              </div>
            </NavLink>
            {/* Case : user logged */}
            {logged && 
              <NavLink to='/account'>
              <div className='container__nav__items'>
                Compte
              </div>
              </NavLink>
            }
            {/* Case : user is not logged */}
            {!logged && <>
              <NavLink to='/login'>
              <div className='container__nav__items'>
                Connexion
              </div>
              </NavLink>
              <NavLink to='/signup'>
              <div className='container__nav__items'>
                S'inscrire
              </div>
              </NavLink>
            </>}
            <NavLink to='/linesup'>
              <div className='container__nav__items'>
                Lines-up
              </div>
            </NavLink>
            <NavLink to='/joinus'>
              <div className='container__nav__items'>
                Nous-rejoindre
              </div>
            </NavLink> 
            <NavLink to='/about'>
              <div className='container__nav__items'>
                À propos
              </div>
            </NavLink> 
        </div>
        <div className='container__law'>
          <div className='container__law__desc'>
            Copyright © Paws. All rights reserved.
          </div>
          <NavLink to='/privacy'>
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