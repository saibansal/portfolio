import React from 'react'
import PhotoshopIcon from './portfolio-images/photoshop.jpg';
import HTMLCSSIcon from './portfolio-images/html5_css3.jpg';
import TwitterBootstrap from './portfolio-images/Twitter-Bootstrap.jpg';


class PortfolioPopupItems extends React.Component {
    render() {
        var TenthImage = {
            backgroundImage: 'url(http://marvelcode.karansaluja.com/images/portfolio_01.png)'
        }
        return (
            <div className="w-100 float-left portfolio-content bg-white portfolio-slide-center" id={this.props.PortItemId}>
                <div className="row">
                    <div className="col-lg-12 col-xl-6 pop-up-left" style={TenthImage}> </div>
                    <div className="col-lg-12 col-xl-6 pop-up-right">
                        <div className="w-100 float-left">
                            <h2 className="w-100 float-left mb-0">{this.props.PortfolioHeadings}</h2>
                            <p>{this.props.PortBelowHeading}</p>
                        </div>

                        <div className="w-100 float-left">
                            <h2 className="w-100 float-left mb-0">Project Link</h2>
                            <p><a href="#" className="project-link" target="_blank"> {this.props.PortProjectLink}</a></p>
                        </div>

                        <div className="w-100 float-left">
                            <h2 className="w-100 float-left mb-0">Technology Used</h2>
                            <p>
                                <a href="#" data-toggle="tooltip" title={this.props.TechnologyUsed} data-placement="bottom"><img src={PhotoshopIcon} alt={this.props.PhotoshopIconAlt} /></a>
                                <a href="#" data-toggle="tooltip" title="Technology Used : HTML5 / CSS3" data-placement="bottom"><img src={HTMLCSSIcon} alt="HTML5 / CSS3" /></a>
                                <a href="#" data-toggle="tooltip" title="Technology Used : Twitter Bootstrap 4.0" data-placement="bottom"><img src={TwitterBootstrap} alt="Twitter Boostrap" /></a>
                            </p>
                        </div>

                        <div className="w-100 float-left">
                            <h2 className="w-100 float-left mb-0"> Description</h2>
                            <p>{this.props.PortDescription}</p>
                        </div>

                        <div className="w-100 float-left contact-content portfolio-pop text-center mt-4">
                            <button className="explore" onClick="window.location.href=ProjectLinkCopied" target='_blank'>Visit Site<span className="icon-right"></span><span className="icon-right after"></span></button>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default PortfolioPopupItems;