// Libs
import React, { Component } from 'react';  

//Components

// CSS

export default class PostForm extends Component {
  constructor() {
    super();
  }

  render() {
      return (
      <div>
        <form className="new-post" id="create_post" action="/posts/" acceptCharset="UTF-8" method="POST">
          <div className="input-group">
            <span className="input-group-addon"><i className ="icon-user"></i></span>
            <input 
              className="form-control input-lg"
              placeholder="Title"
              tabIndex="1"
              type="text"
              name="title"
              id="post_title" />
          </div>

          <div className="input-group">
            <span className="input-group-addon"><i className="icon-lock"></i></span>
            <input
              className="form-control input-lg"
              placeholder="Body"
              tabIndex="2"
              type="text"
              name="body"
              id="post_body" />
          </div>
          <input 
            type="submit"
            name="submit"
            value="Submit"
            className="btn btn-lg btn-block btn-success"
            id="login" />
        </form>
      </div>
    );
  };
}

