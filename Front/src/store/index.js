/* Package imports */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/* Local imports */
// Reducer
import rootReducer from '../reducers';
// MW
import authMiddleware from '../middlewares/auth';
import newsMiddleware from '../middlewares/news';
import sectionsMiddleware from '../middlewares/sections';
import adminMiddleware from '../middlewares/admin';
import usersMiddleware from '../middlewares/users';
import tagsMiddleware from '../middlewares/tags';

/* Store */

const persistConfig = {
  key:'root',
  storage,
};

const enhancer = composeWithDevTools(
    applyMiddleware(authMiddleware),
    applyMiddleware(newsMiddleware),
    applyMiddleware(sectionsMiddleware),
    applyMiddleware(adminMiddleware),
    applyMiddleware(usersMiddleware),
    applyMiddleware(tagsMiddleware),
  );


const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);
export { persistor, store};

