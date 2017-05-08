import React, { Component } from 'react';
import Post from './Post';

export default class Posts extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='post-container'>
        {
          this.props.posts.map(post => {
            return <Post key={post.id} post={post} />
          })
        }
      </div>
    );
  }
}

Posts.defaultProps = {
  posts: []
}
