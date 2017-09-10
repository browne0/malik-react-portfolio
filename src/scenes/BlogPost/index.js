import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Prism from 'prismjs'


class blogPost extends Component {
  componentDidMount(props) {
    document.title = this.props.blog.postData.title + " | Malik Browne";
    Prism.highlightAll()
  }

  render(props) {
    let blogLength = this.props.blog.postData.__content
      .replace(/<[^>]*>/g, " ")
      .replace("/s+/g", " ")
      .replace("/+/g")
      .trim()
      .split(" ").length;

    let blogLengthString =
      blogLength / 275 < 1
        ? (blogLength / 275 * 60).toFixed() + " sec read"
        : (blogLength / 275).toFixed() + " min read";
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
            className="post-header"
            style={{
              backgroundImage: `url(${this.props.blog.postData.header})`
            }}
          />
          <div className="post-title">
            <h1>{this.props.blog.postData.title}</h1>
          </div>
          <div className="post-author">
            <img
              src="http://malikbrowne.com/assets/selfie/selfie.jpg"
              alt=""
              className="avatar"
            />
            <div className="avatar-info">
              <p className="author-name">{this.props.blog.postData.author}</p>
              <p className="date">
                <Moment parse="YYYY-MM-DD" format="MMM D">
                  {this.props.blog.postData.date_published}
                </Moment>
                <span>&middot;</span>
                {blogLengthString}
              </p>
            </div>
          </div>
          <div
            className="markdown-body"
            dangerouslySetInnerHTML={{
              __html: this.props.blog.postData.__content
            }}
          />
        </div>
      </div>
    );
  }
}

export default blogPost;
