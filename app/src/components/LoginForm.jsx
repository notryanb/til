// Libs
import React from 'react';  

//Components

// CSS

const LoginForm = () => {

  return (
    <div>
      <form className="login" id="new_user_session" action="/sign_in" acceptCharset="UTF-8" method="post">
        <input name="utf8" type="hidden" value="&#x2713;" />
        <input type="hidden" name="authenticity_token" value="/N+7r2MUgn2B1Xvimg5TDpWfKUvVrvyq1fme+VM7lF4v6OhODfoCeW9y0Gl3OFGN5IurUiv8LIhypYPJeIUkcg==" />
        <div className="input-group">
          <span className="input-group-addon"><i className ="icon-user"></i></span>
          <input className="form-control input-lg" placeholder="Email" tabIndex="1" type="text" name="user_session[email]" id="user_session_email" />
        </div>

        <div className="input-group">
          <span className="input-group-addon"><i className="icon-lock"></i></span>
          <input className="form-control input-lg" placeholder="Password" tabIndex="2" type="password" name="user_session[password]" id="user_session_password" />
        </div>
        <input type="submit" name="commit" value="Login" className ="btn btn-lg btn-block btn-success" id="login" data-disable-with="Login" />
        <div className="forgot">Forgot your password? <a className="" href="/reset/password/new">Click here</a></div>
      </form>
    </div>
  );
}

export default LoginForm;
