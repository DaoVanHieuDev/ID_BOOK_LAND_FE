import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Fragment } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <Router>
  <Fragment>
    <App/>
  </Fragment>
 </Router>
);