/* Package imports */
import axios from 'axios';

/* Local imports */
import { apiUrl } from './url';

// Action
import {
  AdminAuthFailed,
  AdminLoginSuccess,
 } from '../store/action';


/* Admin MiddleWare */
const Admin = (store) => (next) => (action) => {
  switch (action.type) {
    
    case 'ADMIN_LOGIN': { 
      const { auth: { email, password } } = store.getState();
      const config = {
        method: 'post',
        url: `${apiUrl}/admin`,
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
          store.dispatch(AdminLoginSuccess(response.data.data, response.data.token));
        }
      }).catch((error) => {
        if (error.response.status === 401 || 404) {
          store.dispatch(AdminAuthFailed(error.response.data));
        } else {
        }
      });
      break;
    };
    
    default: 
      next(action);
  }
};

export default Admin;