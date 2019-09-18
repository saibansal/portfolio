import React from 'react';
import PortfolioItems from './PortfolioItems'; 
import FirstThumb from './portfolio-images/portfolio_01.png';
import SecondThumb from './portfolio-images/portfolio_02.png';
import thirdThumb from './portfolio-images/portfolio_03.png';
import fourthThumb from './portfolio-images/portfolio_04.png';
import fifthThumb from './portfolio-images/portfolio_05.png';

class Portfolio extends React.Component { 
    constructor() {
        super();
        this.state = {
            names:[
                {
                    PortfolioDetail : 'Front Web Solution',
                    ListImage : FirstThumb,
                },
                
                {
                    PortfolioDetail : 'Luminoguru',
                    ListImage : SecondThumb,
                },

                {
                    PortfolioDetail : 'Seasia Infotech',
                    ListImage : thirdThumb,
                },
        
                {
                    PortfolioDetail : 'Fourth Links',
                    ListImage : fourthThumb,
                },

                {
                    PortfolioDetail : 'Fifth Links',
                    ListImage : fifthThumb,
                },

                {
                    PortfolioDetail : 'Sixth Links',
                    ListImage : FirstThumb,
                },
            ],
        }
    }
    render() { 
        
        return ( 
            <div className="inner-container move-right" id="portfolio">
                <h2 className="text-center text-uppercase mt-3 pt-3 col-md-12 mb-0 float-left">Portfolio Marvel</h2>
                <h5 className="text-center font-weight-normal col-md-12 float-left mt-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                <div className="col-12 col-md-10 offset-0 offset-md-1 float-left mt-4 bg-white portfolio-container">
                    <div className="w-100 float-left p-3">
                       {this.state.names.map(function (name) {
                           return <PortfolioItems 
                           key={name.PortfolioDetail} 
                           PortfolioDetails={name.PortfolioDetail} 
                           ListUrl={name.ListImage} /> 
                         })
                        }   
                    </div>
                </div> 
            </div> 
        
         )
    }
}
 
export default Portfolio;