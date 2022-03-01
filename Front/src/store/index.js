/* Package imports */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

/* Local imports */
// Reducer
import rootReducer from '../reducers';
// MW
import authMiddleware from '../middlewares/auth';
import apiMiddleware from '../middlewares/api';

/* Store */
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(authMiddleware),
    apiMiddleware,
  ),
);


export default store;