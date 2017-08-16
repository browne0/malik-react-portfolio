import React from 'react';
import { Link } from 'react-router-dom';

const blogPost = (props) => {
  console.log(props);
  return (
    <div className="blog-post">
      <Link to='/blog'>« Back to blog</Link>
      <hr />
      <div className='markdown-body' dangerouslySetInnerHTML={{ __html: props.blog.postData.__content }}></div>
    </div>
  );
}


export default blogPost
