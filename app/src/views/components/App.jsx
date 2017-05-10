// Libs
import React from 'react';  
import Posts from './posts/Posts';

export default class App extends React.Component {  
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  render() {
    return (
      <div>
        <Posts posts={this.props.posts} />
      </div>
    );
  }
}
