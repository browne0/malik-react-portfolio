import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import BlogPost from '../BlogPost';

// eslint-disable-next-line import/no-webpack-loader-syntax
const webpackRequireContext = require.context('!markdown-with-front-matter-loader!../../_posts', false, /.md$/);
const blogs = webpackRequireContext.keys().reduce((memo, fileName) => memo.set(fileName.match(/.\/([^.]+).*/)[1], webpackRequireContext(fileName)), new Map());

const blogRoutes = [...blogs.keys()].map(path => <Route key={path} path={'/blog/' + path} component={BlogPost(blogs.get(path))} />);

const blogList = (blogs) => ({match}) => 
	<Switch>
		<Route exact path={match.url} render={() => (
			<div className="blog">
				<ul>
					{[...blogs.keys()].map(path => 
						<li key={path}>
							<Link to={`/blog/${path}`}>{blogs.get(path).title || path}</Link>
							</li>
					)}
				</ul>
			</div>
		)}/>
		{blogRoutes}
	</Switch>

export default blogList(blogs);