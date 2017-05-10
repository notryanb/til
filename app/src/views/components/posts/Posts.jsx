import React, { Component } from 'react';
import Post from './Post';

const Posts = ({posts}) => {
  return (
    <div className='post-container'>
      {
        posts.map(post => {
          return <Post key={post.id} post={post} />
        })
      }
    </div>
  )
}

Posts.propTypes = {
  posts: React.PropTypes.array.isRequired
};

Posts.defaultProps = {
  posts: []
};

export default Posts;
