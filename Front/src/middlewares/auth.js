/* Package imports */
import axios from 'axios';

/* Local imports */
import { apiUrl } from './url';

// Action
import { 
  authFailed,
  loginSuccess,
  editUserSuccess,
  imgUploadSuccess,
  signUpPending,
 } from '../store/action';


/* Auth MiddleWare */
const Auth = (store) => (next) => (action) => {
  switch (action.type) {

    case 'USER_SIGNUP': {
      const { auth: { username, email, password } } = store.getState();
      const capitalizeUsername = username.charAt(0).toUpperCase() + username.slice(1);
      const config = {
        method: 'post',
        url: `${apiUrl}/user`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          username: capitalizeUsername,
          email,
          password,
        },
      };
      axios(config)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
            store.dispatch(signUpPending(response.data.message));
          }
        }).catch((error) => {
          if (error.response.status === 401) {
            store.dispatch(authFailed(error.response.data));
          } else {
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
          store.dispatch(loginSuccess(response.data.data, response.data.token));
        }
      }).catch((error) => {
        if (error.response.status === 401 || 404) {
          store.dispatch(authFailed(error.response.data));
        } else {
          console.log(error);
        }
      });
      break;
    };

    case 'EDIT_USER': {
      const { auth: { username, email, password, id, section_id, token } } = store.getState();

      const config = {
        method: 'patch',
        url: `${apiUrl}/user/${id}`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Baerer ${token}`,
        },
        data: {
          username,
          email,
          password,
          section_id,
        },
      };
      axios(config)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
            store.dispatch(editUserSuccess(response.data.data, response.data.message));
          }
        }).catch((error) => {
          console.log(error);
        });
        break;
    };

    case 'UPDATE_IMG_PROFIL': {
      const { auth: { id, token } } = store.getState();
      const formData = new FormData();
      formData.append(`myImage`, action.formData);
      const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Baerer ${token}`,
      }
      };
      axios.post(`${apiUrl}/user/image/${id}`, formData, config)
        .then((response) => {
          store.dispatch(imgUploadSuccess(response.data.data, response.data.message));
        }).catch((error) => {
          console.log(error);
        });
      break;
    };

    case 'ACCOUNT_VALIDATION': {
      const token = action.token;
      axios.get(`${apiUrl}/verify/${token}`)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
          }
        }).catch((error) => {
          console.log(error);
        });
        break;
    }


    default: 
      next(action);
  }
};

export default Auth;