/* Package imports */
import React from 'react';
import { render } from 'react-dom';

/*  Local imports */
// Styles
import './styles/reset.scss';
import './styles/index.scss';
// Components
import App from './components/App';
// Store


const rootReactElement = (
  <App />
);
const target = document.getElementById('root');
render(rootReactElement, target);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
