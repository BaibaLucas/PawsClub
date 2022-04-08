/* Package imports */
import { combineReducers } from 'redux';

/* Local imports */
import authReducers from './auth';
import newsReducers from './news';
import sectionsReducers from './sections';
import usersReducers from './users';
import tagsReducers from './tags';


/* Reducer */
export default combineReducers({
  auth: authReducers,
  news: newsReducers,
  sections: sectionsReducers,
  users: usersReducers,
  tags: tagsReducers,
});