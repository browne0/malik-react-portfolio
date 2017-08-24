import React, { Component } from "react";
import { Link } from "react-router-dom";

class blogPost extends Component {
  componentDidMount(props) {
    document.title = this.props.blog.postData.title + ' | Malik Browne'
  }
  
  render(props) {
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
            dangerouslySetInnerHTML={{ __html: this.props.blog.postData.__content }}
          />
        </div>
      </div>
    );
  }
}

export default blogPost;
