import React from 'react';
import ReactDOM from 'react-dom';
// track history of user's navigation (routes) 
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import App from './views/App';
import reportWebVitals from './utils/performance/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log); 
