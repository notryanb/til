import React from 'react';  
import BlogPost from './BlogPost.jsx';

require('./App.scss');

export default class App extends React.Component {  
  render() {
    return <BlogPost />;
  }
}
