/* Package imports */
import axios from 'axios';

/* Local imports */
import { apiUrl } from './url';

// Action
import { 
  signUpSuccess,
  authFailed,
  loginSuccess,
 } from '../store/action';


/* Auth MiddleWare */
const Auth = (store) => (next) => (action) => {
  switch (action.type) {

    case 'USER_SIGNUP': {
      const { auth: { username, email, password } } = store.getState();
      const config = {
        method: 'post',
        url: `${apiUrl}/user`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          username,
          email,
          password,
        },
      };
      axios(config)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
            store.dispatch(signUpSuccess(response.data.data));
          }
        }).catch((error) => {
          if (error.response.status === 401) {
            store.dispatch(authFailed(error.response.data));
          } else {
            console.log('Error has been appeared 2 =>', error);
          }
        });
        break;
    };

    case 'LOGIN': {
      const { auth: { email, password } } = store.getState();
      const config = {
        method: 'post',
        url: `${apiUrl}/login`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email,
          password,
        },
      };
      axios(config)
      .then((response) => {
        if (response.status !== 200) {
          throw response.error;
        } else {
          store.dispatch(loginSuccess(response.data.data));
        }
      }).catch((error) => {
        if (error.response.status === 401 || 404) {
          store.dispatch(authFailed(error.response.data));
        } else {
          console.log('Error has been appeared 2 =>', error);
        }
      });
      break;
    };


    default: 
      next(action);
  }
};

export default Auth;