// Libs
import React from 'react';  
import { Router, Route, hashHistory} from 'react-router';

// Components
import BlogPost from './BlogPost.jsx';
import LoginForm from './LoginForm.jsx';

// CSS
require('./App.scss');

export default class App extends React.Component {  
  constructor() {
    super()
    this.state = {
      blogs: []
    }
  }
 
  componentDidMount() {
    fetch('http://localhost:3030')
      .then(response => response.json())
      .then(data => {
        this.setState({ blogs: data.fulfillmentValue });
      });
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.blogs !== nextState.blogs) {
      return true;
    }
    return false;
  }

  
  render() {
    return (
      <div>
      <Router history={hashHistory}>
        <Route path='login' component={LoginForm} />
      </Router>
      </div>
    );
  }
}
