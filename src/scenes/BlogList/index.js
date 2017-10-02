import React, { Component } from "react";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import BlogPost from "../BlogPost";
import Moment from "react-moment";
import { TextField } from "material-ui";
import FlipMove from "react-flip-move";
import PortfolioDelegate from "../../utils/PortfolioDelegate";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Helmet from "react-helmet";

class blogList extends Component {
  constructor() {
    super();

    this.state = {
      blogs: [],
      filteredBlogs: [],
      search: ""
    };
    this.onFilterChange = this.onFilterChange.bind(this);
    this.filterBlogs = this.filterBlogs.bind(this);
  }
  componentWillUnmount() {
    this.unmounted = true;
  }

  componentDidMount() {
    const delegate = new PortfolioDelegate();
    delegate.getBlogs().then(response => {
      if (this.unmounted) return;

      this.setState({
        blogs: response.items,
        filteredBlogs: response.items.sort((a, b) => {
          return a.fields.date < b.fields.date;
        })
      });
    });
  }

  filterBlogs() {
    let blogs = this.state.blogs;
    let query = this.state.search;

    blogs = blogs.filter(blog => {
      return blog.fields.title.toLowerCase().includes(query);
    });
    this.setState({ filteredBlogs: blogs });
  }

  onFilterChange(e) {
    let search = e.target.value.toLowerCase();
    this.setState({ search }, () => this.filterBlogs());
  }
  render() {
    let { match, location } = this.props;
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
        key={blog.fields.slug}
        path={"/blog/" + blog.fields.slug}
        component={() => <BlogPost blog={blog} data={this.state.blogs} />}
      />
    ));

    const blogPosts = this.state.filteredBlogs.map((blog, index) => {
      let blogHeader = blog.fields.featuredImage ? (
        <Link to={`/blog/${blog.fields.slug}`} className="post-header">
          <div
            className="post-header-image"
            style={{
              backgroundImage: `url(${blog.fields.featuredImage.fields.file
                .url})`
            }}
          />
        </Link>
      ) : null;
      let blogLength = blog.fields.body
        .replace(/<[^>]*>/g, " ")
        .replace("/s+/g", " ")
        .replace("/+/g")
        .trim()
        .split(" ").length;

      let blogAuthors = blog.fields.author.map(author => {
        return author.fields.name;
      });

      let blogLengthString =
        blogLength / 275 < 1
          ? (blogLength / 275 * 60).toFixed() + " sec read"
          : (blogLength / 275).toFixed() + " min read";
      return (
        <article
          key={blog.fields.slug}
          to={`/blog/${blog.fields.slug}`}
          className="post"
        >
          <img
            src={blog.fields.author[0].fields.profilePhoto.fields.file.url}
            alt=""
            className="avatar"
          />

          <p className="author">
            <a href={blog.fields.author[0].fields.twitter}>
              {blogAuthors.join(", ")}
            </a>
          </p>
          <p className="date">
            <Moment parse="YYYY-MM-DD" format="MMM D">
              {blog.fields.date}
            </Moment>
            <span>&middot;</span>
            {blogLengthString}
          </p>
          {blogHeader}
          <Link to={`/blog/${blog.fields.slug}`} className="title">
            <h2>{blog.fields.title}</h2>
          </Link>
          <p className="summary">{blog.fields.description}</p>
          <div className="read-more">
            <Link to={`/blog/${blog.fields.slug}`} className="post-header">
              Read more...
            </Link>
          </div>
        </article>
      );
    });
    const timeout = { enter: 300, exit: 200 };
    return (
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          timeout={timeout}
          exit={false}
          classNames="fade"
        >
          <Switch>
            <Route
              exact
              path={match.path}
              render={() => (
                <div className="blog-wrapper">
                  <Helmet title="Blog">
                    <meta
                      name="description"
                      content="Check out the latest blog posts from front end developer, Malik Browne."
                    />
                    <meta
                      name="keywords"
                      content="web development blogs, blog, coding blogs, front end development, ui/ux, web development, full stack development, malik browne, malik"
                    />
                    <meta property="og:title" content="Blog | Malik Browne" />
                    <meta
                      property="og:description"
                      content="Check out the latest blog posts from front end developer, Malik Browne."
                    />
                    <meta
                      property="og:url"
                      content="https://malikbrowne.com/old-portfolio"
                    />
                    <meta
                      property="og:image"
                      content="http://malikbrowne.com/assets/selfie/about_bg3.jpg"
                    />
                  </Helmet>
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
                  {this.state.blogs.length !== 0 && !this.unmounted && (
                    <FlipMove
                      duration={400}
                      easing="ease"
                      className="blog"
                      enterAnimation="fade"
                      leaveAnimation="fade"
                    >
                      {blogPosts}
                    </FlipMove>
                  )}
                </div>
              )}
            />
            {blogRoutes}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default withRouter(blogList);
