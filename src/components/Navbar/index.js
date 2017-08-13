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
		this.props.history.push(`/${lowerCaseRoute}`);
	}

	onTitleClick() {
		this.props.history.push('/');
	}
	
	render () {
		const styles = {
			tabs: {
				backgroundColor: '#333',
				boxShadow: 'rgba(0, 0, 0, 0.24) 0px 1px 6px, rgba(0, 0, 0, 0.24) 0px 1px 4px',
				title: {
					
				},
				tab: {
					height: '100%',
					width: '300px',
					backgroundColor: '#333'
				},
				inkBar: {
					backgroundColor: 'rgba(255, 132, 13, .75)'
				}
			}
		}

		const title = 
		<div className="logo-wrapper">
			<img className="logo" src="http://malikbrowne.com/assets/logos/new_portfolio_logo.png" alt=""/>
			<h1>MALIK BROWNE</h1>
			<h2>FRONT END ENGINEER &amp; UX ENTHUSIAST</h2>
		</div>;

		return (
			<header>
				<AppBar 
					onTitleTouchTap={this.onTitleClick} 
					title={title}
					style={styles.tabs}
					showMenuIconButton={false}>
					<Tabs 
						tabItemContainerStyle={styles.tabs.tab}
					 	inkBarStyle={styles.tabs.inkBar}
					 	value={this.props.location.pathname}>
						<Tab 
							label="About" 
							onActive={this.onTabClick}
							value="/about" />
						<Tab 
							label="Blog" 
							onActive={this.onTabClick}
							value="/blog" />
						<Tab 
							label="Contact" 
							onActive={this.onTabClick}
							value="/contact" />
					</Tabs>
				</AppBar>
			</header>
		);
	}
} 

export default withRouter(Navbar)