/* Package imports */
import axios from 'axios';

/* Local imports */
import { apiUrl } from './url';

// Action
import { 
  signUpSuccess,
  userCreationFailed,
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
          console.log('RESPONSE AFTER CALL', response);
          if (response.status !== 200) {
            throw response.error;
          } else {
            console.log('Reponse OK =>', response);
            store.dispatch(signUpSuccess(response.data.data));
          }
        }).catch((error) => {
          if (error.response.status === 401) {
            console.log('Votre mot de passe doit contenir au minimum une majuscule, un nombre et un caractère spéciale.');
            console.log('err.Res', error.response);
            console.log('err.Res.data.message', error.response.data.message);
            store.dispatch(userCreationFailed(error.response.data));
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