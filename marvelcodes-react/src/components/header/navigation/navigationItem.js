import React from 'react'
import SiteLogo from '../../../components/logo.svg';
import NavigationList from './NavigationList';

class NavigationItems extends React.Component {
    
    constructor() {
        super(); 
        this.state = {
            names:[
                {
                    PortfolioDetail : 'Home',
                    dataId : 'main-content',
                    ListingClass: 'home-page'
                },
                
                {
                    PortfolioDetail : 'About Us', 
                    dataId : 'aboutUs',
                    ListingClass: 'about aboutUs'
                },

                {
                    PortfolioDetail : 'Portfolio', 
                    dataId : 'portfolio',
                    ListingClass: 'portfolio'
                },
        
                {
                    PortfolioDetail : 'Contact Us', 
                    dataId : 'contactUs',
                    ListingClass: 'contact contactUs'
                },
 
            ],
        }
    }
    render() {
        var LogoHeight = {
            height: 57 + 'px',
        } 
        return (
            <nav id="main-navigation" className="main-navigation">
                <ul className="block-mainnavigation nav-primary">
                    <li className="d-inline-block pb-0 mobile-logo  d-sm-inline-block d-md-inline-block d-lg-inline-block d-xl-none">
                        <a href="index.html" className="p-0"><embed type="image/svg+xml" src={SiteLogo} style={LogoHeight} /></a>
                    </li>

                    {this.state.names.map(function (name) {
                        return <NavigationList 
                        key={name.PortfolioDetail} 
                        PortfolioDetails={name.PortfolioDetail} 
                        dataIdName={name.dataId} 
                        navigationClass={name.ListingClass}
                          /> 
                    })
                    }
                    {/* <li className="home-page active" data-id="main-content"> <a>Home</a> </li>
                    <li className="about aboutUs" data-id="aboutUs"> <a>About Us</a> </li>
                    <li className="portfolio" data-id="portfolio"> <a>Portfolio</a> </li>
                    <li className="contact contactUs" data-id="contactUs"> <a>Contact</a> </li> */}
                </ul>
            </nav>
        )
    }
}
 
export default NavigationItems;