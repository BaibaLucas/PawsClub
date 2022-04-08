/* Package imports */
import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { MdAddPhotoAlternate } from 'react-icons/md';
import { ImCross } from 'react-icons/im';

/* Local imports */
import defaultPic from '../../assets/images/defaultPic.jpeg';

// Components

const Account = ({ username, email, password, profilurl, logged, handleChange, handleSubmit, section_name, handleSubmitSection, sections, success, msg, refreshStatus, refreshUser, disconnected }) => {

  /** Redirect to /login if user is not logged */
  const navigate = useNavigate();
  useEffect(() => {
    if (!logged) {
      return navigate("/login");
    }
  });

  /** States for opening form edit */
  const [openUsername, setOpenUsername] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
  const [openSection, setOpenSection] = useState(false);
  
  /** () => for opening form edit {refactoring}*/
  const usernameClick = () => {
    setOpenUsername(!openUsername);
    setOpenEmail(false);
    setOpenPassword(false);
    setOpenSection(false);
  };
  const emailClick = () => {
    setOpenEmail(!openEmail);
    setOpenUsername(false);
    setOpenPassword(false);
    setOpenSection(false);
  };
  const passwordClick = () => {
    setOpenPassword(!openPassword);
    setOpenUsername(false);
    setOpenEmail(false);
    setOpenSection(false);
  };
  const sectionClick = () => {
    setOpenSection(!openSection);
    setOpenUsername(false);
    setOpenEmail(false);
    setOpenPassword(false);
  };
  
  /** Handle input value */
  const onChange = (event) => {
    handleChange(event.target.value, event.target.name);
  }
  
  /** Handle submit value {refactoring}*/
  const onSubmitUsername = (event) => {
    event.preventDefault();
    setOpenUsername(false);
    handleSubmit();
  };
  const onSubmitPassword = (event) => {
    event.preventDefault();
    setOpenPassword(false);
    handleSubmit();
  };
  const onSubmitEmail = (event) => {
    event.preventDefault();
    setOpenEmail(false);
    handleSubmit();
  };
  const onSubmitSection = (event) => {
    event.preventDefault();
    setOpenSection(false);
    handleSubmitSection();
  }

  const closeModal = () => {
    refreshStatus();
    refreshUser();
  }

  const disconnect = () => {
    disconnected();
  }

  // If user haven't profile picture return default pic
  const usrImg = () => {
    if (profilurl == null) {
      return defaultPic
    } else {
      return profilurl;
    }
  }
  
  
    return (
      <div className='account'>
        <div className='container'>
          <div className='container__title'>
            <h1>Mon Compte</h1>
          </div>
          <div className='container__card'>
          <div className='container__card__header'>
          <NavLink to ='/account/update' > 
            <div className='container__card__header__image'>
              <div className='container__card__header__image__icon'>
              <MdAddPhotoAlternate size={40} color={'#FAFF00'}/>
              </div>
              <img src={usrImg()} alt='avatar' />
            </div>
          </NavLink>
            <div className='container__card__header__name'>
              {username}
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
                {username}
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
                  name='username'
                  id='editusername'
                  placeholder='username'
                  value={username}
                  onChange={onChange}
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
                  {email}
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
                  name='email'
                  id='editemail'
                  placeholder='email'
                  value={email}
                  onChange={onChange}
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
                  name='password'
                  id='editpassword'
                  placeholder='password'
                  value={password}
                  onChange={onChange}
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
            {/* SECTION EDIT */}
            <div className='container__card__content__section'>
              <div className='container__card__content__section__box'>
                <div className='container__card__content__section__box__left'>
                <div className='container__card__content__section__box__left__desc'>
                  Section
                </div>
                <div className='container__card__content__section__box__left__name'>
                  {section_name}
                </div>
                </div>
                <div className='container__card__content__section__box__right'>
                {!openSection && (
                  <button className='container__card__content__section__box__right button' onClick={sectionClick}>
                  Edit
                </button>
                )}
                </div>
              </div>
            {/* SECTION EDIT */}
            {openSection && (
              <>
              <form className='container__card__content__section__form' onSubmit={onSubmitSection}>
                <label className='container__card__content__section__form__label' htmlFor="email">Change Section</label>
                <select name='section_id'
                    className='container__card__content__section__form__label' 
                    onChange={onChange}
                    >
                     <option value="">Section</option>
                      {sections.map(s => {
                        return <option key={s.id} value={s.id}>{s.title}</option>
                      })}
                    </select>
                <button className='container__card__content__section button' type='submit'>
                  Save
                </button>
                <button className='container__card__content__section button' type='reset' onClick={sectionClick}>
                  Cancel
                </button>
              </form>
              </>
            )}
            </div>
            {success && (
              <>
              <div className='modal'>
                {msg}
                <button className='modal__button' onClick={closeModal}> Retour au profil </button>  
              </div>
              </>
            )}
            <div>Si vous êtes streamers n'hésitez pas à revenir vers le staff afin de pouvoir afficher votre chaine sur notre plateforme.</div>
            <div className='container__card__content__disconnect' onClick={disconnect}>
              <div className='container__card__content__disconnect__text'> Se deconnecter </div>
              <div className='container__card__content__disconnect__logo'>
                <ImCross size={30}/>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  };
  
  export default Account;