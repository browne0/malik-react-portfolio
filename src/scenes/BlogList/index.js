import React, { Component } from "react";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import BlogPost from "../BlogPost";
import Moment from "react-moment";
import { TextField } from "material-ui";
// eslint-disable-next-line import/no-webpack-loader-syntax
const webpackRequireContext = require.context(
  "!markdown-with-front-matter-loader!../../_posts",
  false,
  /.md$/
);

const blogs = webpackRequireContext.keys().reduce(
  (memo, fileName) =>
    memo.concat({
      path: fileName.match(/.\/([^.]+).*/)[1],
      postData: webpackRequireContext(fileName)
    }),
  []
);

const blogRoutes = blogs.map(blog =>
  <Route
    key={blog.path}
    path={"/blog/" + blog.path}
    component={() => <BlogPost blog={blog} />}
  />
);

class blogList extends Component {
  constructor() {
    super();

    this.state = {
      blogs: blogs,
      filteredBlogs: blogs,
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
          color: "#FF6600"
        },
        bgcolor: {
          borderColor: "#FF6600"
        }
      }
    };

    const blogPosts = this.state.filteredBlogs.map((blog, index) => {
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
          <img src="http://placekitten.com/36" alt="" className="avatar" />

          <p className="author">
            {blog.postData.author}
          </p>
          <p className="date">
            <Moment parse="YYYY-MM-DD" format="MMM D">
              {blog.postData.date_published}
            </Moment>
            <span>&middot;</span>
            {blogLengthString}
          </p>
          <Link to={`/blog/${blog.path}`} className="title">
            <h2>
              {blog.postData.title}
            </h2>
          </Link>
          <p className="summary">
            {blog.postData.summary}
          </p>
        </article>
      );
    });
    return (
      <Switch>
        <Route
          exact
          path={match.url}
          render={() =>
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
              <div className="blog">
                {blogPosts}
              </div>
            </div>}
        />
        {blogRoutes}
      </Switch>
    );
  }
}

export default withRouter(blogList);
