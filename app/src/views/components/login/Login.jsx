// Libs
import React from 'react';  
import LoginForm from './LoginForm';

// CSS
// import './App.scss';

export default class Login extends React.Component {  
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <p>Login Page</p>
        <LoginForm />
      </div>
    );
  }
}

