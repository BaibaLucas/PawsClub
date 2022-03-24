/* Package imports */
import axios from 'axios';

/* Local imports */
import { apiUrl } from './url';

// Action
import {
  getUsersSuccess,
  getStreamersSuccess,
 } from '../store/action';


/* Users MiddleWare */
const Admin = (store) => (next) => (action) => {
  switch (action.type) {

    case 'GET_USERS': {
      axios.get(`${apiUrl}/user`)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
            console.log(response.data);
            store.dispatch(getUsersSuccess(response.data.data));
          }
        }).catch((error) => {
          console.log('Savage error Appeared', error);
        });
        break;
    }

    case 'SUBMIT_ROLE': {
      const { users: { user_id, role_id },
              auth: { token },
    } = store.getState();

      const config = {
        method: 'patch',
        url: `${apiUrl}/user/${user_id}`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Baerer ${token}`,
        },
        data: {
          role_id
        },
      };
      axios(config)
        .then((response) => {
          console.log('ICI');
          if (response.status !== 200) {
            throw response.error;
          } else {
            // store.dispatch(editUserSuccess(response.data));
            console.log(response.data);
          }
        }).catch((error) => {
          console.log('Oups !', error);
        });
        break;
    }

    case 'DELETE_USER': {
      const { users: { user_id },
              auth: { token },
    } = store.getState();
      const config = {
        method: 'delete',
        url: `${apiUrl}/user/${user_id}`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Baerer ${token}`,
        },
      };
      axios(config)
        .then((response) => {
          if (response.status !==200) {
            throw response.error;
          } else {
            // store.dispatch(deleteUserSuccess(response.data));
            console.log(response.data);
          }
        }).catch((error) => {
          console.log('Oups !', error);
        });
        break;
    }

    case 'GET_STREAMERS': {
      axios.get(`${apiUrl}/streams`)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
            console.log(response.data);
            store.dispatch(getStreamersSuccess(response.data.data));
          }
        }).catch((error) => {
          console.log('Savage error Appeared', error);
        });
        break;
    }
    
    default: 
      next(action);
  }
};

export default Admin;