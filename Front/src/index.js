/* Package imports */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';

/*  Local imports */
// Styles
import './styles/reset.scss';
import './styles/index.scss';
// Components
import App from './components/App';
// Store
import store from './store';


const rootReactElement = (
  <Router>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </Router>
);
const target = document.getElementById('root');
render(rootReactElement, target);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
