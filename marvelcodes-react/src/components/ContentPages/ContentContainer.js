import React from 'react';
import HomePage from './homepage';
import AboutUs from './AboutUs';
import Portfolio from './portfolio/Portfolio';
import  ContactUs from "./ContactUs";


class ContentContainer extends React.Component{
    render(){
        return(
            <section>
                <div className="content-container overflow-hidden home">
                    <HomePage />
                    <AboutUs />
                    <Portfolio />
                    <ContactUs />
                </div>
            </section>
        )
    }
}   
export default ContentContainer;