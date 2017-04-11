import React from 'react';

export default const Post = props  => {
  const { user_id, title, body } = props.post;
  return (
    <div className='post'>
      <div className='author'>Author ID: {user_id}</div>
      <div className='title'>Title: {title}</div>
      <div className='body'>Body: {body}</div>
    </div>
  );
}

