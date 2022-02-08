/* Package imports */
import React, { useState } from 'react';
import { Link, Navigate, NavLink } from 'react-router-dom';
import { MdAddPhotoAlternate } from 'react-icons/md';

/* Local imports */
import defaultPic from '../../assets/images/defaultPic.jpeg';

// Components

const Account = () => {

  /** States for opening form edit */
  const [openUsername, setOpenUsername] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
  
  /** () => for opening form edit {refactoring}*/
  const usernameClick = () => {
    setOpenUsername(!openUsername);
    setOpenEmail(false);
    setOpenPassword(false);
  };
  const emailClick = () => {
    setOpenEmail(!openEmail);
    setOpenUsername(false);
    setOpenPassword(false);
  };
  const passwordClick = () => {
    setOpenPassword(!openPassword);
    setOpenUsername(false);
    setOpenEmail(false);
  };
  
  /** Handle input value */
  
  /** Handle submit value {refactoring}*/
  const onSubmitUsername = (event) => {
    event.preventDefault();
    setOpenUsername(false);
  };
  const onSubmitPassword = (event) => {
    event.preventDefault();
    setOpenPassword(false);
  };
  const onSubmitEmail = (event) => {
    event.preventDefault();
    setOpenEmail(false);
  };
  
  
    return (
      <div className='account'>
        <div className='container'>
          <div className='container__title'>
            <h1>MY account</h1>
          </div>
          <div className='container__card'>
          <div className='container__card__header'>
          <NavLink to ='/account/update' > 
            <div className='container__card__header__image'>
              <div className='container__card__header__image__icon'>
              <MdAddPhotoAlternate size={40} color={'#EA92DD'}/>
              </div>
              <img src={defaultPic} alt='avatar' />
            </div>
          </NavLink>
            <div className='container__card__header__name'>
              username
            </div>
          </div>
          {/* DETAILS */}
          <div className='container__card__content'>
          {/* USERNAME */}
            <div className='container__card__content__username'>
              <div className='container__card__content__username__box'>
                <div className='container__card__content__username__box__left'>
                <div className='container__card__content__username__box__left__desc'>
                  Display name
                </div>
                <div className='container__card__content__username__box__left__name'>
                  username
                </div>
                </div>
                <div className='container__card__content__username__box__right'>
                {!openUsername && (
                  <button className='container__card__content__username__box__right button' onClick={usernameClick}>
                  Edit
                </button>
                )}
                </div>
              </div>
            {/* USERNAME EDIT */}
            {openUsername && (
              <>
              <form className='container__card__content__username__form' onSubmit={onSubmitUsername}>
                <label className='container__card__content__username__form__label' htmlFor="username">Change Username</label>
                <input 
                  className='container__card__content__username__form__input'
                  type='text'
                  name='editusername'
                  id='editusername'
                  placeholder='username'
                />
                <button className='container__card__content__username button' type='submit'>
                  Save
                </button>
                <button className='container__card__content__username button' type='reset' onClick={usernameClick}>
                  Cancel
                </button>
              </form>
              </>
            )}
            </div>
            {/* EMAIL */}
            <div className='container__card__content__email'>
              <div className='container__card__content__email__box'>
                <div className='container__card__content__email__box__left'>
                <div className='container__card__content__email__box__left__desc'>
                  Email
                </div>
                <div className='container__card__content__email__box__left__name'>
                  email
                </div>
                </div>
                <div className='container__card__content__email__box__right'>
                {!openEmail && (
                  <button className='container__card__content__email__box__right button' onClick={emailClick}>
                  Edit
                </button>
                )}
                </div>
              </div>
            {/* EMAIL EDIT */}
            {openEmail && (
              <>
              <form className='container__card__content__email__form' onSubmit={onSubmitEmail}>
                <label className='container__card__content__email__form__label' htmlFor="email">Change Email</label>
                <input 
                  
                  className='container__card__content__email__form__input'
                  type='email'
                  name='editemail'
                  id='editemail'
                  placeholder='email'
                />
                <button className='container__card__content__email button' type='submit'>
                  Save
                </button>
                <button className='container__card__content__email button' type='reset' onClick={emailClick}>
                  Cancel
                </button>
              </form>
              </>
            )}
            </div>
            {/* PASSWORD */}
            <div className='container__card__content__password'>
              <div className='container__card__content__password__box'>
                <div className='container__card__content__password__box__left'>
                <div className='container__card__content__password__box__left__desc'>
                  Password
                </div>
                <div className='container__card__content__password__box__left__name'>
                  **********
                </div>
                </div>
                <div className='container__card__content__password__box__right'>
                {!openPassword && (
                  <button className='container__card__content__password__box__right button' onClick={passwordClick}>
                  Edit
                </button>
                )}
                </div>
              </div>
            {/* PASSWORD EDIT */}
            {openPassword && (
              <>
              <form className='container__card__content__password__form' onSubmit={onSubmitPassword}>
                <label className='container__card__content__password__form__label' htmlFor="password">Change Password</label>
                <input 
                  className='container__card__content__password__form__input'
                  type='editpassword'
                  name='editpassword'
                  id='editpassword'
                  placeholder='password'
                />
                <button className='container__card__content__password button' type='submit'>
                  Save
                </button>
                <button className='container__card__content__password button' type='reset' onClick={passwordClick}>
                  Cancel
                </button>
              </form>
              </>
            )}
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  };
  
  export default Account;