// library imports
import React from 'react';  // !== framework
import { createRoot } from 'react-dom/client';  // replaced 'ReactDOM' in v.18 React Upgrade
import { BrowserRouter } from 'react-router-dom';  // record user's navigation (routes)
// local imports
import './index.scss';
import App from './App';
import reportWebVitals from './utils/performance/reportWebVitals';
// store html 'root' element as entry point for our app
const root = createRoot(document.getElementById('root'));
// instantiate 'root' element with our rendered app
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// Performance measuring of app logged to console. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log); 
