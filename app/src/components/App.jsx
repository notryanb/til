import React from 'react';  
import BlogPost from './BlogPost.jsx';

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
        this.setState({ blogs: data });
      });
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.blogs !== nextState.blogs) {
      return true;
    }
    return false;
  }

  
  render() {
    return <BlogPost blogs={this.state.blogs} />;
  }
}
