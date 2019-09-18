import React from 'react';

class HomePage extends React.Component {
    render() {
        var FirstSectionHoverImage = {
            backgroundImage: 'url(https://www.dentons.com/-/media/images/website/background-images/practices/corporate/corporate-2.jpg)',
        }

        var SecondSectionHoverImage = {
            backgroundImage: 'url(https://thumbs.dreamstime.com/z/business-theme-background-concept-16930372.jpg)',
        }

        var ThirdSectionImage  = {
            backgroundImage: 'url(https://previews.123rf.com/images/miaoumiaoumiaou/miaoumiaoumiaou1508/miaoumiaoumiaou150800175/43469396-dark-text-background-with-abstract-geometric-element-and-glowing-lights-corporate-futuristic-design-.jpg)'
        }

        var FourthSectionImage = {
            backgroundImage: 'url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/HPWsSXb4xiwrj8lkx/videoblocks-tropical-beach-background-loop_bhjouqunm_thumbnail-full01.png)',
        }

        var FifthSectionImage = {
            backgroundImage: 'url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/HPWsSXb4xiwrj8lkx/videoblocks-tropical-beach-background-loop_bhjouqunm_thumbnail-full01.png)'
        }

        var SixthImage = {
            backgroundImage : 'url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/HPWsSXb4xiwrj8lkx/videoblocks-tropical-beach-background-loop_bhjouqunm_thumbnail-full01.png)'
        }
        
        var seventhImage = {
            backgroundImage : 'url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/HPWsSXb4xiwrj8lkx/videoblocks-tropical-beach-background-loop_bhjouqunm_thumbnail-full01.png)'
        }

        var EightImage = {
            backgroundImage: 'url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/HPWsSXb4xiwrj8lkx/videoblocks-tropical-beach-background-loop_bhjouqunm_thumbnail-full01.png)'
        }

        var ninthImage = {
            backgroundImage: 'url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/HPWsSXb4xiwrj8lkx/videoblocks-tropical-beach-background-loop_bhjouqunm_thumbnail-full01.png)'
        }

        var TenthImage = {
            backgroundImage: ' url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/HPWsSXb4xiwrj8lkx/videoblocks-tropical-beach-background-loop_bhjouqunm_thumbnail-full01.png)'
        }
        
        return ( 
                 <main className="site-main page-theme- move-center position-absolute" id="main-content">
                <div>
                    <div id="block-landsec-content" data-block-plugin-id="system_main_block">
                        <div className="homepage" data-homepage-wrap>
                            <div className="homepage__grid homepage__grid--content" data-screen-content>
                                <div className="homepage__item homepage__item-1 homepage-aboutus">
                                    <div className="homepage__item-content about" data-id="aboutUs">
                                        <p className="homepage__item-tag homepage__item-tag--themed">Lorem Ipsum</p>
                                        <a className="h2 homepage__item-link">About Marvel Codes</a>
                                    </div>
                                    <div className="homepage__item-overlay display-palm--none">
                                        <div className="item-overlay__wrapper">
                                            <div className="item-overlay__image" style={FirstSectionHoverImage}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="homepage__item homepage__item-2 homepage-Hireme">
                                    <div className="homepage__item-content">
                                        <p className="homepage__item-tag homepage__item-tag--themed">Lorem Ipsum</p>
                                        <a href="https://www.upwork.com/" target="_blank" className="h2 homepage__item-link">Hire Me</a>
                                    </div>
                                    <div className="homepage__item-overlay display-palm--none">
                                        <div className="item-overlay__wrapper">
                                            <div className="item-overlay__image" style={SecondSectionHoverImage}></div>
                                        </div>
                                    </div>
                                    <div className="homepage__item-background display-palm--none"></div>
                                </div>
                                <div className="homepage__item homepage__item-3 homepage-portfolio">
                                    <div className="homepage__item-content portfolio" data-id="portfolio">
                                        <p className="homepage__item-tag homepage__item-tag--themed">Lorem Ipsum</p>
                                        <a className="h2 homepage__item-link">Portfolio</a>
                                    </div>
                                    <div className="homepage__item-overlay display-palm--none">
                                        <div className="item-overlay__wrapper">
                                            <div className="item-overlay__image" style={ThirdSectionImage}></div>
                                        </div>
                                    </div>
                                    <div className="homepage__item-background display-palm--none"></div>
                                </div>
                                <div className="homepage__item homepage__item-4 homepage-Hireme">
                                    <div className="homepage__item-content contact" data-id="contactUs">
                                        <p className="homepage__item-tag homepage__item-tag--themed">Lorem Ipsum</p>
                                        <a className="h2 homepage__item-link">Contact Us</a>
                                    </div>
                                    <div className="homepage__item-overlay display-palm--none">
                                        <div className="item-overlay__wrapper">
                                            <div className="item-overlay__image" style={FourthSectionImage}></div>
                                        </div>
                                    </div>
                                    <div className="homepage__item-background display-palm--none"></div>
                                </div>

                                <div className="homepage__item homepage__item-5 home-bottom-left">
                                    <div className="homepage__item-overlay display-palm--none">
                                        <div className="item-overlay__wrapper">
                                            <div className="item-overlay__image" style={FifthSectionImage}></div>
                                        </div>
                                    </div>
                                    <div className="homepage__item-background display-palm--none"></div>
                                </div>

                                <div className="homepage__item homepage__item-6 display-palm--none">
                                    <div className="homepage__item-background display-palm--none"></div>
                                </div>
                                <div className="homepage__item homepage__item-7 display-palm--none">
                                    <div className="homepage__item-background display-palm--none"></div>
                                </div>

                            </div>

                            <div className="homepage__grid homepage__grid--preload" data-screen-preload>
                                <div className="homepage__preload-image homepage__preload-image-1">
                                    <div className="homepage__preload-image-content" style={SixthImage}></div>
                                </div>
                                <div className="homepage__preload-image homepage__preload-image-2">
                                    <div className="homepage__preload-image-content" style={seventhImage}></div>
                                </div>
                                <div className="homepage__preload-image homepage__preload-image-3">
                                    <div className="homepage__preload-image-content" style={EightImage}></div>
                                </div>
                                <div className="homepage__preload-image homepage__preload-image-4">
                                    <div className="homepage__preload-image-content" style={ninthImage}></div>
                                </div>
                                <div className="homepage__preload-image homepage__preload-image-5">
                                    <div className="homepage__preload-image-content" style={TenthImage}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>     
        )
    }
}
export default HomePage;