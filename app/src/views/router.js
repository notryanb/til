// Libs
import React from 'react';
import { Router, Route, browserHistory, hashHistory } from 'react-router';

// Components
import App from './components/App.jsx';
import BlogPost from './components/posts/Posts.jsx';
import LoginForm from './components/login/LoginForm.jsx';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="login" component={LoginForm} />
  </Router>
);

export default routes;




