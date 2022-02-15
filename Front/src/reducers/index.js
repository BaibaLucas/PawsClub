/* Package imports */
import { combineReducers } from 'redux';

/* Local imports */
import authReducers from './auth';

/* Reducer */
export default combineReducers({
  auth: authReducers,
});