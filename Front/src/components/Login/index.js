/* Packages import */
import React from 'react';

/* Local import */

// Components

const Login = ({}) => {
  return(
    <div className='login'>
      <div className='container'>
        <div className='container__title'>
          <h1>connexion</h1>
        </div>
        <form className='container__form'>
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
          <button className='container__form__button' type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
};

export default Login;