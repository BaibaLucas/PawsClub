/* Package import */
import React from 'react';
import { NavLink } from 'react-router-dom';

/* Local imports */

// Components

const DesktopMenu = ({ logged, role }) => {

  return (
    <div className='desktopmenu'>
      <nav className='desktopmenu__nav'>
        <ul className='desktopmenu__nav__list'>
          {/* Case : user logged */}
          {logged && (
            <NavLink className={(navData) => (navData.isActive ? 'active' : 'desktopmenu__nav__list__item')} to='/account'>
            <li className='desktopmenu__nav__list__item__name'>
              Compte
            </li>
          </NavLink>
          )}
          {/* Case : moderator logged */}
          {logged && role === 2 && (
            <NavLink className={(navData) => (navData.isActive ? 'active' : 'desktopmenu__nav__list__item')} to='/createnews'>
              <li className='desktopmenu__nav__list__item__name'>
                Create News
              </li>
            </NavLink>
          )}
          {/* Case : user is not logged */}
          {!logged && (
          <>
            <NavLink className={(navData) => (navData.isActive ? 'active' : 'desktopmenu__nav__list__item')} to='/login'>
            <li className='desktopmenu__nav__list__item__name'>
              Connexion
            </li>
            </NavLink>
            <NavLink className={(navData) => (navData.isActive ? 'active' : 'desktopmenu__nav__list__item')} to='/signup'>
              <li className='desktopmenu__nav__list__item__name'>
                S'inscrire
              </li>
            </NavLink>
          </> 
          )}
          <NavLink className={(navData) => (navData.isActive ? 'active' : 'desktopmenu__nav__list__item')} to='/news'>
            <li className='desktopmenu__nav__list__item__name'>
              News
            </li>
          </NavLink>
          <NavLink className={(navData) => (navData.isActive ? 'active' : 'desktopmenu__nav__list__item')} to='/roster'>
            <li className='desktopmenu__nav__list__item__name'>
              Roster
            </li>
          </NavLink>
          <NavLink className={(navData) => (navData.isActive ? 'active' : 'desktopmenu__nav__list__item')} to='/streams'>
            <li className='desktopmenu__nav__list__item__name'>
              Streams
            </li>
          </NavLink>
          <NavLink className={(navData) => (navData.isActive ? 'active' : 'desktopmenu__nav__list__item')} to='/linesup'>
            <li className='desktopmenu__nav__list__item__name'>
              Lines-up
            </li>
          </NavLink>
          <NavLink className={(navData) => (navData.isActive ? 'active' : 'desktopmenu__nav__list__item')} to='/joinus'>
            <li className='desktopmenu__nav__list__item__name'>
              Nous-rejoindre
            </li>
          </NavLink>
          <NavLink className={(navData) => (navData.isActive ? 'active' : 'desktopmenu__nav__list__item')} to='/about'>
            <li className='desktopmenu__nav__list__item__name'>
              À propos
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default DesktopMenu;