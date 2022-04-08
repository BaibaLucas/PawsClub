/* Packages import */
import React from 'react';
import { Navigate } from 'react-router-dom';

/* Local import */

// Components

const Login = ({ email, password, logged, error, msg, handleChange, handleSubmit }) => {

  /* Handle Change */
  const onChange = (event) => {
    handleChange(event.target.value, event.target.name)
  }
  /* Handle Submit */
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
  };

  return(
    <div className='login'>
      {logged && (
      <Navigate to='/account' />
    )}
      <div className='container'>
        <div className='container__title'>
          <h1>connexion</h1>
        </div>
        <form className='container__form' onSubmit={onSubmit}>
          <label className='container__form__label' htmlFor='email'>Email</label>
          <input
          className='container__form__input'
          type='email'
          name='email'
          id='email'
          placeholder='Email'
          value={email}
          onChange={onChange}
          />
          <label className='container__form__label' htmlFor='password'>Password</label>
          <input
          className='container__form__input'
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          value={password}
          onChange={onChange}
          />
          {error && (
            <div className='container__form__error'>{msg}</div>
          )}
          <button className='container__form__button' type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
};

export default Login;