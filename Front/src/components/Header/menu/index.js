/* Package import */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { RiUserAddFill } from 'react-icons/ri';
import { BsNewspaper } from 'react-icons/bs';
import { RiTeamFill } from 'react-icons/ri';
import { MdLiveTv } from 'react-icons/md';
import { RiGamepadLine } from 'react-icons/ri';
import { FaHandsHelping } from 'react-icons/fa';
import { MdQuestionAnswer } from 'react-icons/md';

/* Local imports */

// Components

const Menu = ({ open, setOpen }) => {

  const close = () => {
    setOpen(!open);
  };

  return (
    <div className={open ? 'menu active' : 'menu'}>
      <nav className='menu__nav'>
        <ul className='menu__nav__list'>
          <NavLink className='menu__nav__list__item' activeClassName='activeBg' onClick={close} exact to ='/'>
            <AiFillHome size={50}/>
            <li className='menu__nav__list__item__name'>
              Home
            </li>
          </NavLink>
          <NavLink className='menu__nav__list__item' activeClassName='activeBg' onClick={close} exact to ='/login'>
            <BiUserCircle size={50} />
            <li className='menu__nav__list__item__name'>
              Login
            </li>
          </NavLink>
          <NavLink className='menu__nav__list__item' activeClassName='activeBg' onClick={close} exact to ='/signup'>
            <RiUserAddFill size={50} />
            <li className='menu__nav__list__item__name'>
              Sign-Up
            </li>
          </NavLink>
          <NavLink className='menu__nav__list__item' activeClassName='activeBg' onClick={close} exact to ='#'>
            <BsNewspaper size={50} />
            <li className='menu__nav__list__item__name'>
              News
            </li>
          </NavLink>
          <NavLink className='menu__nav__list__item' activeClassName='activeBg' onClick={close} exact to ='#'>
            <RiTeamFill size={50} />
            <li className='menu__nav__list__item__name'>
              Roster
            </li>
          </NavLink>
          <NavLink className='menu__nav__list__item' activeClassName='activeBg' onClick={close} exact to ='#'>
            <MdLiveTv size={50} />
            <li className='menu__nav__list__item__name'>
              Streams
            </li>
          </NavLink>
          <NavLink className='menu__nav__list__item' activeClassName='activeBg' onClick={close} exact to ='#'>
            <RiGamepadLine size={50} />
            <li className='menu__nav__list__item__name'>
              Lines-up
            </li>
          </NavLink>
          <NavLink className='menu__nav__list__item' activeClassName='activeBg' onClick={close} exact to ='#'>
            <FaHandsHelping size={50} />
            <li className='menu__nav__list__item__name'>
              Join Us
            </li>
          </NavLink>
          <NavLink className='menu__nav__list__item' activeClassName='activeBg' onClick={close} exact to ='#'>
            <MdQuestionAnswer size={50} />
            <li className='menu__nav__list__item__name'>
              Who are us
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Menu;