/* Packages import */
import React from 'react';

/* Local import */

// Components

const Signup = ({}) => {
  return (
    <div className='signup'>
      <div className='container'>
        <div className='container__title'>
          <h1>Signup</h1>
        </div>
        <form className='container__form'>
          <label className='container__form__label' htmlFor='username'>Username</label>
          <input
          className='container__form__input'
          type='text'
          name='username'
          id='username'
          placeholder='Username'
          // value={emailValue}
          // onChange={onChange}
          />
          <label className='container__form__label' htmlFor='email'>Email</label>
          <input
          className='container__form__input'
          type='email'
          name='email'
          id='email'
          placeholder='Email'
          // value={emailValue}
          // onChange={onChange}
          />
          <label className='container__form__label' htmlFor='password'>Password</label>
          <input
          className='container__form__input'
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          // value={emailValue}
          // onChange={onChange}
          />
          <button className='container__form__button' type='submit'>Signup</button>
        </form>
      </div>
    </div>
  )
};

export default Signup;