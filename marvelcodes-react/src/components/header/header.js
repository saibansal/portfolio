import React from 'react';
import Navigation from './navigation/navigation';
import SiteLogo from '../../components/logo.svg';

class Header extends React.Component {
	render() {
		return (
			<header id="site-header">
				<a className="logo" href="index.html"><img src={SiteLogo} alt="" /></a>
				<Navigation />

				<div className="hamburger-icon  d-inline-block d-sm-inline-block d-md-inline-block d-lg-inline-block d-xl-none">
					<div id="nav-icon1" className="navigation-toggle d-inline-block d-sm-inline-block d-md-inline-block d-lg-inline-block bg-transparent float-right">
						<span></span> <span></span> <span></span>
					</div>
				</div>
			</header>
		)
	}
}


export default Header;