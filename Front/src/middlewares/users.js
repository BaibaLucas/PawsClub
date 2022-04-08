/* Package imports */
import axios from 'axios';

/* Local imports */
import { apiUrl } from './url';

// Action
import {
  getUsersSuccess,
  getStreamersSuccess,
  editRoleSuccess,
  editUserSectionSuccess,
  refreshUserSuccess,
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
            store.dispatch(getUsersSuccess(response.data.data));
          }
        }).catch((error) => {
          console.log(error);
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
          if (response.status !== 200) {
            throw response.error;
          } else {
            store.dispatch(editRoleSuccess(response.data));
          }
        }).catch((error) => {
          console.log(error);
        });
        break;
    }

    case 'EDIT_USER_SECTION': {
      const { auth: { id, section_id },
              auth: { token },
    } = store.getState();

      const config = {
        method: 'patch',
        url: `${apiUrl}/user/${id}`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Baerer ${token}`,
        },
        data: {
          section_id
        },
      };
      axios(config)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
            store.dispatch(editUserSectionSuccess(response.data));
          }
        }).catch((error) => {
          console.log(error);
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
          }
        }).catch((error) => {
          console.log(error);
        });
        break;
    }

    case 'GET_STREAMERS': {
      axios.get(`${apiUrl}/streams`)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
            store.dispatch(getStreamersSuccess(response.data.data));
          }
        }).catch((error) => {
          console.log(error);
        });
        break;
    }

    case 'REFRESH_USER': {
      const { auth: { id },
              auth: { token },
    } = store.getState();
      const config = {
        method: 'get',
        url: `${apiUrl}/user/${id}`,
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
            store.dispatch(refreshUserSuccess(response.data));
            console.log(response.data);
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

export default Admin;