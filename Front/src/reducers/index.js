/* Package imports */
import { combineReducers } from 'redux';

/* Local imports */
import authReducers from './auth';
import apiReducers from './api';


/* Reducer */
export default combineReducers({
  auth: authReducers,
  api: apiReducers,
});