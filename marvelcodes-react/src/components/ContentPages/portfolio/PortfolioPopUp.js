import React from 'react';
import FirstThumb from './portfolio-images/portfolio_01.png';
import PortfolioPopupItems from './PortfolioPopupItems';
class PortfolioPopup extends React.Component { 
    constructor() {
        super();
        this.state = {
            PortfolioItems:[
                {
                    PortfolioHeading : 'Front Web Solution',
                    ListImage : FirstThumb,
                    PorfolioId : 'first',
                    BelowHeading : ' Young UI/UX Designer with skills for mobile and web',
                    ProjectLink: 'https://www.google.com',
                    TechnologyUsed : 'Technology Used : Adobe Photoshop CC Cloud',
                    Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
                },
            ],
        }
    }

    render() {
        return (
            <div className="modal fade portfolio-popup-modal portfolio-popup-modal-lg show" tabIndex="-1" role="dialog" aria-labelledby="PortfolioPopupLabel" aria-hidden="true">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"></button>
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <button className="portfolio-prev"></button>
                        <div className="content-slider position-relative">
                            {this.state.PortfolioItems.map(function (PortfolioItemsList) {
                                return <PortfolioPopupItems 
                                key={PortfolioItemsList.PortfolioHeading} 
                                PortfolioHeadings={PortfolioItemsList.PortfolioHeading} 
                                ListUrl={PortfolioItemsList.ListImage} 
                                PortItemId = {PortfolioItemsList.PorfolioId}
                                PortBelowHeading = {PortfolioItemsList.BelowHeading}
                                PortProjectLink = {PortfolioItemsList.ProjectLink}
                                PortTechnologyUsed = {PortfolioItemsList.TechnologyUsed}
                                PortPhotoshopIconAlt = {PortfolioItemsList.PhotoshopIconAlt}
                                PortDescription = {PortfolioItemsList.Description}
                                /> 
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }

    
    
    export default PortfolioPopup;