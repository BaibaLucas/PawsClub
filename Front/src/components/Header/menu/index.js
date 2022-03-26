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
import { MdManageAccounts } from 'react-icons/md';
import { MdCreateNewFolder } from 'react-icons/md';

/* Local imports */

// Components

const Menu = ({ open, setOpen, logged, role }) => {

  const close = () => {
    setOpen(!open);
  };

  return (
    <div className={open ? 'menu active' : 'menu'}>
      <nav className='menu__nav'>
        <ul className='menu__nav__list'>
          <NavLink className='menu__nav__list__item'  onClick={close} to='/'>
            <AiFillHome size={50}/>
            <li className='menu__nav__list__item__name'>
              Home
            </li>
          </NavLink>
          {/* Case : user logged */}
          {logged && (
            <NavLink className='menu__nav__list__item'  onClick={close} to='/account'>
            <MdManageAccounts size={50} />
            <li className='menu__nav__list__item__name'>
              Account
            </li>
          </NavLink>
          )}
          {/* Case : moderator logged */}
          {logged && role === 2 && (
            <NavLink className='menu__nav__list__item'  onClick={close} to='/createnews'>
              <MdCreateNewFolder size={50} />
              <li className='menu__nav__list__item__name'>
                Create News
              </li>
            </NavLink>
          )}
          {/* Case : user is not logged */}
          {!logged && (
          <>
            <NavLink className='menu__nav__list__item'  onClick={close} to='/login'>
            <BiUserCircle size={50} />
            <li className='menu__nav__list__item__name'>
              Login
            </li>
            </NavLink>
            <NavLink className='menu__nav__list__item'  onClick={close} to='/signup'>
            <RiUserAddFill size={50} />
              <li className='menu__nav__list__item__name'>
                Sign-Up
              </li>
            </NavLink>
          </> 
          )}
          <NavLink className='menu__nav__list__item'  onClick={close} to='/news'>
            <BsNewspaper size={50} />
            <li className='menu__nav__list__item__name'>
              News
            </li>
          </NavLink>
          <NavLink className='menu__nav__list__item'  onClick={close} to='/roster'>
            <RiTeamFill size={50} />
            <li className='menu__nav__list__item__name'>
              Roster
            </li>
          </NavLink>
          <NavLink className='menu__nav__list__item'  onClick={close} to='/streams'>
            <MdLiveTv size={50} />
            <li className='menu__nav__list__item__name'>
              Streams
            </li>
          </NavLink>
          <NavLink className='menu__nav__list__item'  onClick={close} to='/linesup'>
            <RiGamepadLine size={50} />
            <li className='menu__nav__list__item__name'>
              Lines-up
            </li>
          </NavLink>
          <NavLink className='menu__nav__list__item'  onClick={close} to='/joinus'>
            <FaHandsHelping size={50} />
            <li className='menu__nav__list__item__name'>
              Join Us
            </li>
          </NavLink>
          <NavLink className='menu__nav__list__item'  onClick={close} to='/about'>
            <MdQuestionAnswer size={50} />
            <li className='menu__nav__list__item__name'>
              Who we are
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Menu;