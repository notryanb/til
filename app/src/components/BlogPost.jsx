import React from 'react';

export default class BlogPost extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.blogs);
    return (

      <div>
        {
          this.props.blogs.map(blog => {
            <Blog content={blog.content} />
          })
        }
      </div>

    );
  }
}

 const Blog = props => {

  return <div>{props.content}</div>;
}


