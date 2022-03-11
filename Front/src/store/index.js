/* Package imports */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

/* Local imports */
// Reducer
import rootReducer from '../reducers';
// MW
import authMiddleware from '../middlewares/auth';
import newsMiddleware from '../middlewares/news';
import sectionsMiddleware from '../middlewares/sections';
import adminMiddleware from '../middlewares/admin';
import usersMiddleware from '../middlewares/users';

/* Store */
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(authMiddleware),
    applyMiddleware(newsMiddleware),
    applyMiddleware(sectionsMiddleware),
    applyMiddleware(adminMiddleware),
    applyMiddleware(usersMiddleware),
  ),
);


export default store;