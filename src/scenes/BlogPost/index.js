import React from "react";
import { Link } from "react-router-dom";

const blogPost = props => {
  return (
    <div className="blog-post">
      <div className="back-to-blog">
        <Link to="/blog">
          <i className="material-icons">arrow_back</i>
          <span>Back to blog</span>
        </Link>
      </div>
      <div className="container">
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: props.blog.postData.__content }}
        />
      </div>
    </div>
  );
};

export default blogPost;
