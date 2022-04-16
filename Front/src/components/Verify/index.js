/* Package imports */
import React, { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';


/* Local imports */

// Components

const Verify = ({ accountValidation, refresh }) => {

  const match = { params: useParams() };
  const token = match.params.id;
  useEffect(() => {
    accountValidation(token);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refreshPending = () => {
    refresh();
  };

  
  return (
    <div className='streams'>
      <div className='container'>
        <div className='container__presentation'>
          <div className='container__presentation__title'>
            <h1>VERIFICATION DU COMPTE</h1>
          </div>
          <div className='container__presentation__content'>
            Votre compte à bien été verifier vous pouvez maintenant vous connecté.
            <NavLink to='/login' className='container__presentation__content__button' onClick={refreshPending}>
               Se connecter
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Verify;