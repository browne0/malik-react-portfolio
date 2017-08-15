import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import BlogPost from "../BlogPost";
import Moment from "react-moment";

// eslint-disable-next-line import/no-webpack-loader-syntax
const webpackRequireContext = require.context(
  "!markdown-with-front-matter-loader!../../_posts",
  false,
  /.md$/
);
const blogs = webpackRequireContext
  .keys()
  .reduce(
    (memo, fileName) =>
      memo.set(
        fileName.match(/.\/([^.]+).*/)[1],
        webpackRequireContext(fileName)
      ),
    new Map()
  );

const blogRoutes = [...blogs.keys()].map(path =>
  <Route
    key={path}
    path={"/blog/" + path}
    component={BlogPost(blogs.get(path))}
  />
);

console.log(blogs);

const blogList = blogs => ({ match }) =>
  <Switch>
    <Route
      exact
      path={match.url}
      render={() =>
        <div className="blog">
          <div>
            {[...blogs.keys()].map(path =>
              <Link key={path} to={`/blog/${path}`} className="post">
                <img
                  src="http://placekitten.com/36"
                  alt=""
                  className="avatar"
                />

                <a className="author" href={blogs.get(path).twitter_author}>
                  {blogs.get(path).author}
                </a>
                <p className="date">
                  <Moment parse="YYYY-MM-DD" format="MMM D">
                    {blogs.get(path).date_published}
                  </Moment>
                  <span>&middot;</span>
                  {Number(
                    blogs
                      .get(path)
                      .__content.replace(/<[^>]*>/g, " ")
                      .replace("/s+/g", " ")
                      .trim()
                      .split(" ").length
                  ) /
                    275 <
                  1
                    ? Number(
                        String(
                          Number(
                            blogs
                              .get(path)
                              .__content.replace(/<[^>]*>/g, " ")
                              .replace("/s+/g", " ")
                              .trim()
                              .split(" ").length
                          ) /
                            275 *
                            60
                        )
                      )
                        .toFixed()
                        .toString() + " sec read"
                    : Number(
                        String(
                          Number(
                            blogs
                              .get(path)
                              .__content.replace(/<[^>]*>/g, " ")
                              .replace("/s+/g", " ")
                              .trim()
                              .split(" ").length
                          ) / 275
                        )
                      )
                        .toFixed()
                        .toString() + " min read"}
                </p>
              </Link>
            )}
          </div>
        </div>}
    />
    {blogRoutes}
  </Switch>;

export default blogList(blogs);
