// Libs
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Components
import App from './components/App.jsx';
import BlogPost from './components/Posts.jsx';
import LoginForm from './components/LoginForm.jsx';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route path='/login' component={LoginForm} />
  </Router>
);

export default routes;




