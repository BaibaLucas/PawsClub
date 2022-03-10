/* Package imports */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillTag } from 'react-icons/ai';
import { BsNewspaper } from 'react-icons/bs';
import { RiGamepadLine } from 'react-icons/ri';
import { RiTeamFill } from 'react-icons/ri';

/* Local imports */
import defaultPic from '../../assets/images/defaultPic.jpeg';
// Components

const AdminDashboard = () => {
  return(
    <div className='admindashboard'>
      <div className='container'>
        <div className='container__admin'>
          <img className='container__admin__img' alt='user_img' src={defaultPic}/>
          <div className='container__admin__username'>
          Username
          </div>
        </div>
        <nav className='container__nav'>
          <ul className='container__nav__list'>
            <NavLink className='container__nav__list__item' to='/admin/dashboard/users'>
            <RiTeamFill size={50} />
              <li className='menu__nav__list__item__name'>
                Users
              </li>
            </NavLink>
            <NavLink className='container__nav__list__item' to='/admin/dashboard/linesup'>
              <RiGamepadLine size={50} />
              <li className='menu__nav__list__item__name'>
                Sections
              </li>
            </NavLink>
            <NavLink className='container__nav__list__item' to='/admin/dashboard/news'>
            <BsNewspaper size={50} />
              <li className='menu__nav__list__item__name'>
                News
              </li>
            </NavLink>
            <NavLink className='container__nav__list__item' to='/admin/dashboard/tag'>
            <AiFillTag size={50}/>
              <li className='menu__nav__list__item__name'>
                Tag
              </li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  )
};

export default AdminDashboard;