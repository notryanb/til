import React from 'react';

export default class BlogPost extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (

      <div>
        {
          this.props.blogs.map(blog => {
            return <Blog key={blog.id} content={blog.content} />
          })
        }
      </div>

    );
  }
}

 const Blog = props => {

  return <div>{props.content}</div>;
}


