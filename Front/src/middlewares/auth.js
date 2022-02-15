/* Package imports */
import axios from 'axios';

/* Local imports */
import { apiUrl } from './url';

// Action


/* Auth MiddleWare */
const Auth = (store) => (next) => (action) => {
  switch (action.type) {
    default: 
      next(action);
  }
};

export default Auth;