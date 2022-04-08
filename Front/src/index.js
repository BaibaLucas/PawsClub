/* Package imports */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';

/*  Local imports */
// Styles
import './styles/reset.scss';
import './styles/index.scss';
// Components
import App from './containers/App';
// Store
import {store, persistor} from './store';


const rootReactElement = (
  <Router>
    <StoreProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate >
    </StoreProvider>
  </Router>
);
const target = document.getElementById('root');
render(rootReactElement, target);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
