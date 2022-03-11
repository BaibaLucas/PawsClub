/* Package imports */
import { combineReducers } from 'redux';

/* Local imports */
import authReducers from './auth';
import newsReducers from './news';
import sectionsReducers from './sections';
import usersReducers from './users';


/* Reducer */
export default combineReducers({
  auth: authReducers,
  news: newsReducers,
  sections: sectionsReducers,
  users: usersReducers,
});