import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="nav">
			<div className="navbar">
				<div className="navbar-brand">
					<Link to="/">Malik Browne</Link>
				</div>
				<div className="navbar-items">
					<div className="nav-item">
						<Link to="/about">About</Link>
					</div>
					<div className="nav-item">
						<Link to="/portfolio">Portfolio</Link>
					</div>
					<div className="nav-item">
						<Link to="/blog">Blog</Link>
					</div>
					<div className="nav-item">
						<Link to="/contact">Contact</Link>
					</div>
				</div>
			</div>
		</nav>
	);
} 

export default Navbar