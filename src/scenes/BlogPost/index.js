import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Prism from "prismjs";
import DisqusThread from "../../components/DisqusThread";
import PortfolioDelegate from "../../utils/PortfolioDelegate/index";
import Button from "../../components/ThemedButton";

class blogPost extends Component {
  componentWillMount(props) {
    let delegate = new PortfolioDelegate();
    this.setState({
      blog: this.props.blog,
      nextBlog: delegate.getNextBlog(this.props.blog.postData.title),
      prevBlog: delegate.getPreviousBlog(this.props.blog.postData.title)
    });
    document.title = this.props.blog.postData.title + " | Malik Browne";
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    let prevButton = this.state.prevBlog ? (
      <Button
        containerElement={<Link to={`/blog/${this.state.prevBlog.path}`} />}
        className="prevButton"
      >
        <span className="buttonText">
          <i className="icon ion-arrow-left-b" /> Prev Post
        </span>
      </Button>
    ) : null;
    let nextButton = this.state.nextBlog ? (
      <Button
        containerElement={<Link to={`/blog/${this.state.nextBlog.path}`} />}
        className="nextButton"
      >
        <span className="buttonText">Next Post</span>{" "}
        <i className="icon ion-arrow-right-b" />
      </Button>
    ) : null;
    let blogLength = this.state.blog.postData.__content
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
                backgroundImage: `url(${this.state.blog.postData.header})`
              }}
            />
          <div className="wrapper">
            <div className="post-title">
              <h1>{this.state.blog.postData.title}</h1>
            </div>
            <div className="post-author">
              <img
                src="http://malikbrowne.com/assets/selfie/selfie.jpg"
                alt=""
                className="avatar"
              />
              <div className="avatar-info">
                <p className="author-name">{this.state.blog.postData.author}</p>
                <p className="date">
                  <Moment parse="YYYY-MM-DD" format="MMM D">
                    {this.state.blog.postData.date_published}
                  </Moment>
                  <span>&middot;</span>
                  {blogLengthString}
                </p>
              </div>
            </div>
            <div
              className="markdown-body"
              dangerouslySetInnerHTML={{
                __html: this.state.blog.postData.__content
              }}
            />
            <div className="blog-guide">
              {prevButton}
              {nextButton}
            </div>
          </div>
          <DisqusThread
            basename="http://malikbrowne.com/blog"
            shortname="malik-browne"
            title={this.state.blog.postData.title}
            identifier={`/${this.state.blog.path}`}
            className="comments"
          />
        </div>
      </div>
    );
  }
}

export default blogPost;
