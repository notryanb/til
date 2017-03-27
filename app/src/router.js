// Libs
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Components
import BlogPost from './components/BlogPost.jsx';
import LoginForm from './components/LoginForm.jsx';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='login' component={LoginForm} />
    </Route>
  </Router>
);

export default routes;




