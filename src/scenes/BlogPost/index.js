import React from 'react';
import { Link } from 'react-router-dom';

const blogPost = ({ __content }) => () => 
	<div>
		<Link to='/blog'>« Back to blog</Link>
		<hr />
		<div className='markdown-body' dangerouslySetInnerHTML={{__html: __content}}></div>
	</div>;

export default blogPost
