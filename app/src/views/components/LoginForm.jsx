// Libs
import React, { Component } from 'react';  

//Components

// CSS

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
    this.submitHandler = this.submitHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.fetchHandler = this.fetchHandler.bind(this);
  }

  fetchHandler(email, password) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    fetch('/users/sign_in', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }),
      headers: headers,
      mode: 'cors'
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log('SERVER ERROR: ', err));
  }

  inputHandler(e) {
    let email, password, val, inputType;
    val = e.target.value;
    inputType = e.target.name;

    switch(inputType) {
      case 'email':
        email = val;
        break;
      case 'password':
        password = val;
        break;
      default:
        console.log('err');
    }

    this.setState({
      email: email || this.state.email,
      password: password || this.state.password
    });
  }

  submitHandler(e) {
    e.preventDefault();
    this.fetchHandler(this.state.email, this.state.password);
  }

  render() {
      return (
      <div>
        <form onSubmit={this.submitHandler} className="login" id="new_user_session" action="/users/sign_in" acceptCharset="UTF-8" method="POST">
          <input name="utf8" type="hidden" value="&#x2713;" />
          <div className="input-group">
            <span className="input-group-addon"><i className ="icon-user"></i></span>
            <input 
              className="form-control input-lg"
              value={this.state.email}
              onChange={this.inputHandler}
              placeholder="Email"
              tabIndex="1"
              type="text"
              name="email"
              id="user_session_email" />
          </div>

          <div className="input-group">
            <span className="input-group-addon"><i className="icon-lock"></i></span>
            <input
              className="form-control input-lg"
              value={this.state.password}
              onChange={this.inputHandler}
              placeholder="Password"
              tabIndex="2"
              type="password"
              name="password"
              id="user_session_password" />
          </div>
          <input type="submit" name="commit" value="Login" className ="btn btn-lg btn-block btn-success" id="login" data-disable-with="Login" />
          <div className="forgot">Forgot your password? <a className="" href="/reset/password/new">Click here</a></div>
        </form>
      </div>
    );
  };
}
