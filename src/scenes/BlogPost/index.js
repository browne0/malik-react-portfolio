import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Prism from "prismjs";
import DisqusThread from "../../components/DisqusThread";
import PortfolioDelegate from "../../utils/PortfolioDelegate/index";
import Button from "../../components/ThemedButton";
import ProgressBar from "../../components/ReadingProgressBar";
import Markdown from "react-markdown";
import Helmet from "react-helmet";

class blogPost extends Component {
  componentWillMount() {
    let delegate = new PortfolioDelegate();
    this.setState({
      blog: this.props.blog,
      nextBlog: delegate.getNextBlog(
        this.props.data,
        this.props.blog.fields.title
      ),
      prevBlog: delegate.getPreviousBlog(
        this.props.data,
        this.props.blog.fields.title
      )
    });
    document.title = this.props.blog.fields.title + " | Malik Browne";
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    let prevButton = this.state.prevBlog ? (
      <Button
        containerElement={
          <Link to={`/blog/${this.state.prevBlog.fields.slug}`} />
        }
        className="prevButton"
      >
        <span className="buttonText">
          <i className="icon ion-arrow-left-b" /> Prev Post
        </span>
      </Button>
    ) : null;
    let nextButton = this.state.nextBlog ? (
      <Button
        containerElement={
          <Link to={`/blog/${this.state.nextBlog.fields.slug}`} />
        }
        className="nextButton"
      >
        <span className="buttonText">Next Post</span>{" "}
        <i className="icon ion-arrow-right-b" />
      </Button>
    ) : null;
    let blogLength = this.state.blog.fields.body
      .replace(/<[^>]*>/g, " ")
      .replace("/s+/g", " ")
      .replace("/+/g")
      .trim()
      .split(" ").length;

    let blogAuthors = this.state.blog.fields.author.map(author => {
      return author.fields.name;
    });

    let blogLengthString =
      blogLength / 275 < 1
        ? (blogLength / 275 * 60).toFixed() + " sec read"
        : (blogLength / 275).toFixed() + " min read";

    let keywords =
      "web development blogs, blog, coding blogs, front end development, ui/ux, web development, full stack development, malik browne, malik";
    return (
      <div className="blog-post">
        <Helmet titleTemplate="%s" title={this.state.blog.fields.title}>
          <meta
            name="description"
            content={this.state.blog.fields.description}
          />
          <meta
            name="keywords"
            content={
              this.state.blog.fields.keywords ? (
                this.state.blog.fields.keywords
              ) : (
                keywords
              )
            }
          />
          <meta
            property="og:title"
            content={`${this.state.blog.fields.title} | Malik Browne`}
          />
          <meta
            property="og:description"
            content={this.state.blog.fields.description}
          />
          <meta
            property="og:url"
            content={`https://malikbrowne.com/${this.state.blog.fields.slug}`}
          />
          <meta
            property="og:image"
            content={this.state.blog.fields.featuredImage.fields.file.url}
          />
        </Helmet>
        <ProgressBar targetEl=".blog-post" />
        <div className="back-to-blog">
          <Link to="/blog">
            <i className="material-icons">arrow_back</i>
            <span>Back to blog</span>
          </Link>
          <p>{this.state.blog.fields.title}</p>
        </div>
        <div className="container">
          <div
            className="post-header"
            style={{
              backgroundImage: `url(${this.state.blog.fields.featuredImage
                .fields.file.url})`
            }}
          />
          <article className="wrapper" id="blog-article">
            <div className="post-title">
              <h1>{this.state.blog.fields.title}</h1>
            </div>
            <div className="post-author">
              <img
                src={
                  this.state.blog.fields.author[0].fields.profilePhoto.fields
                    .file.url
                }
                alt={this.state.blog.fields.author[0].fields.name}
                className="avatar"
              />
              <div className="avatar-info">
                <p className="author-name"><a href={this.state.blog.fields.author[0].fields.twitter}>{blogAuthors.join(", ")}</a></p>
                <p className="date">
                  <Moment parse="YYYY-MM-DD" format="MMM D">
                    {this.state.blog.fields.date}
                  </Moment>
                  <span>&middot;</span>
                  {blogLengthString}
                </p>
              </div>
            </div>
            <Markdown
              className="markdown-body"
              source={this.state.blog.fields.body}
            />
            {(prevButton || nextButton) && (
              <div className="blog-guide">
                {prevButton}
                {nextButton}
              </div>
            )}
          </article>
          {this.props.blog.fields.comments && (
            <DisqusThread
              basename="http://malikbrowne.com/blog"
              shortname="malik-browne"
              title={this.state.blog.fields.title}
              identifier={`/${this.state.blog.fields.slug}`}
              className="comments"
            />
          )}
        </div>
      </div>
    );
  }
}

export default blogPost;
