import React from 'react';

class AboutUs extends React.Component{
    constructor(){
        super();
        this.heading = 'About Marvel Codes';
        this.subHeading = 'Main Sub Heading herer';
        
        this.state = {
            
            aboutDetail: [
                {
                    aboutDesc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
                },
                {
                    aboutDesc : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
                }
            ]
        }
    }
    render(){
        return (
            
                <div className="inner-container float-left w-100 move-right" id="aboutUs">
                    <h2 className="text-center text-uppercase mt-3 pt-3 col-md-12 mb-0 float-left">{this.heading}</h2>
                    <h5 className="text-center font-weight-normal col-md-12 float-left mt-0">{this.subHeading}</h5>

                    <div className="col-12 col-md-10 col-lg-8 offset-0 offset-md-1 offset-lg-2 float-left mt-4 about-content bg-white">
                        <div className="row">
                            <div className="col-md-5 pl-0 about-image"></div>
                            <div className="col-md-7 p-5 about-content">
                                
                                {this.state.aboutDetail.map(function (aboutDetails) {
                                    return <AboutDescription 
                                    Aboutus = {aboutDetails.aboutDesc}
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

class AboutDescription extends React.Component{
    render(){
        return(
            <p className="text-white">
                {this.props.Aboutus}
            </p>
        )
    }
}
export default AboutUs;