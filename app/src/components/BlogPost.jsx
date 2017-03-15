import React from 'react';

export default class BlogPost extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (

      <div className='post-container'>
        {
          this.props.blogs.map(blog => {
            return <Blog key={blog.id} blog={blog} />
          })
        }
      </div>

    );
  }
}

 const Blog = props  => {
   const { user_id, title, body } = props.blog;
  return (
    <div className='post'>
      <div className='author'>Author ID: {user_id}</div>
      <div className='title'>Title: {title}</div>
      <div className='body'>Body: {body}</div>
    </div>
  );
}


