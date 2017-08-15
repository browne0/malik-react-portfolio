import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {

	constructor() {
		super();

		this.onTabClick = this.onTabClick.bind(this);
		this.onTitleClick = this.onTitleClick.bind(this);
	}
	
	onTabClick(tab) {
		let lowerCaseRoute = tab.props.label.toLowerCase();
		if (lowerCaseRoute === 'home') {
			this.props.history.push('/');
			return;
		}
		this.props.history.push(`/${lowerCaseRoute}`);
	}

	onTitleClick() {
		this.props.history.push('/');
	}
	
	render () {
		let { location } = this.props;
		const styles = {
			tabs: {
				backgroundColor: '#2B2B2B',
				boxShadow: 'rgba(0, 0, 0, 0.24) 0px 1px 6px, rgba(0, 0, 0, 0.24) 0px 1px 4px',
				display: 'grid',
				gridTemplateColumns: 'min-content 1fr',
				'justifyItems': 'end',
				overflow: 'hidden',
				title: {
					width: '400px'
				},
				tab: {
					gridColumn: '',
					height: '100%',
					backgroundColor: '#2B2B2B'
				},
				inkBar: {
					backgroundColor: '#c24d01'
				}
			}
		}

		const title = 
		<div className="logo-wrapper">
			<img className="logo" src="http://malikbrowne.com/assets/logos/malikbrowne_logo.png" alt=""/>
			<h1>MALIK BROWNE</h1>
			<h2>FRONT END ENGINEER &amp; UX ENTHUSIAST</h2>
		</div>;

		return (
			<header>
				<AppBar 
					onTitleTouchTap={this.onTitleClick} 
					title={title}
					style={styles.tabs}
					titleStyle={styles.title}
					showMenuIconButton={false}
					className="navbar">
					<Tabs 
						tabItemContainerStyle={styles.tabs.tab}
					 	inkBarStyle={styles.tabs.inkBar}
					 	value={location.pathname}
					 	className="nav-items">
						<Tab 
							label="About" 
							onActive={this.onTabClick}
							value="/about"
							className="nav-item" />
						<Tab 
							label="Blog" 
							onActive={this.onTabClick}
							value="/blog"
							className="nav-item" />
						<Tab 
							label="Contact" 
							onActive={this.onTabClick}
							value="/contact"
							className="nav-item" />
					</Tabs>
				</AppBar>
			</header>
		);
	}
} 

export default withRouter(Navbar)