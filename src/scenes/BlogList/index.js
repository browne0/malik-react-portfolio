import React, { Component } from "react";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import BlogPost from "../BlogPost";
import Moment from "react-moment";
import { TextField } from "material-ui";
import FlipMove from "react-flip-move";
import PortfolioDelegate from '../../utils/PortfolioDelegate';

class blogList extends Component {
  constructor() {
    super();
    
    const delegate = new PortfolioDelegate();
    this.state = {
      blogs: delegate.blogs,
      filteredBlogs: delegate.blogs,
      search: ""
    };
    this.onFilterChange = this.onFilterChange.bind(this);
    this.filterBlogs = this.filterBlogs.bind(this);
  }

  filterBlogs() {
    let blogs = this.state.blogs;
    let query = this.state.search;

    blogs = blogs.filter(blog => {
      return blog.postData.title.toLowerCase().includes(query);
    });
    this.setState({ filteredBlogs: blogs });
  }

  onFilterChange(e) {
    let search = e.target.value.toLowerCase();
    this.setState({ search }, () => this.filterBlogs());
  }
  render() {
    let { match } = this.props;
    let style = {
      blogFilter: {
        margin: "auto",
        color: {
          color: "#c24d01"
        },
        bgcolor: {
          borderColor: "#c24d01"
        }
      }
    };

    const blogRoutes = this.state.blogs.map(blog => (
      <Route
        key={blog.path}
        path={"/blog/" + blog.path}
        component={() => <BlogPost blog={blog} />}
      />
    ));

    const blogPosts = this.state.filteredBlogs.map((blog, index) => {
      let blogHeader = blog.postData.header ? (
        <Link to={`/blog/${blog.path}`} className="post-header">
          <div
            className="post-header-image"
            style={{ backgroundImage: `url(${blog.postData.header})` }}
          />
        </Link>
      ) : null;
      let blogLength = blog.postData.__content
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
        <article key={blog.path} to={`/blog/${blog.path}`} className="post">
          <img
            src="http://malikbrowne.com/assets/selfie/selfie.jpg"
            alt=""
            className="avatar"
          />

          <p className="author">{blog.postData.author}</p>
          <p className="date">
            <Moment parse="YYYY-MM-DD" format="MMM D">
              {blog.postData.date_published}
            </Moment>
            <span>&middot;</span>
            {blogLengthString}
          </p>
          {blogHeader}
          <Link to={`/blog/${blog.path}`} className="title">
            <h2>{blog.postData.title}</h2>
          </Link>
          <p className="summary">{blog.postData.summary}</p>
          <div className="read-more">
            <Link to={`/blog/${blog.path}`} className="post-header">
              Read more...
            </Link>
          </div>
        </article>
      );
    });
    return (
      <Switch>
        <Route
          exact
          path={match.url}
          render={() => (
            <div className="blog-wrapper">
              <TextField
                hintText="Enter a blog post title"
                floatingLabelText="Search my blog"
                className="blog-filter"
                style={style.blogFilter}
                floatingLabelFocusStyle={style.blogFilter.color}
                underlineFocusStyle={style.blogFilter.bgcolor}
                onChange={this.onFilterChange}
                value={this.state.search}
              />
              <FlipMove duration={400} easing="ease" className="blog">
                {blogPosts}
              </FlipMove>
            </div>
          )}
        />
        {blogRoutes}
      </Switch>
    );
  }
}

export default withRouter(blogList);
