import React from 'react'

class ContactUs extends React.Component {

    render() {
        let RightSecBoxShadow = {
            boxShadow: '0 0 0'
        }
        let HeightHundredPer = {
            height: '100%'
        }
        return (
            <div className="inner-container move-right" id="contactUs">
                <h2 className="text-center text-uppercase mt-3 pt-3 col-md-12 mb-0 float-left">Contact Marvel</h2>
                <h5 className="text-center font-weight-normal col-md-12 float-left mt-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>

                <div className="col-12 col-md-10 offset-0 offset-md-1 float-left mt-4 contact-content about-content bg-white">
                    <div className="row">
                        <div className="col-md-7 p-5 about-content bg-white" style={RightSecBoxShadow}>

                            <div className="form-wrapper">
                                <form action="" className="form">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="NameSurname">Name &amp; Surname</label>
                                        <input id="NameSurname" className="form-input" type="text" />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="yourEmail">Valid email id</label>
                                        <input id="yourEmail" className="form-input" type="text" />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="mobNum">Your Number</label>
                                        <input id="mobNum" className="form-input" type="text" />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="message">Insert your request here</label>
                                        <textarea id="message" className="form-input"></textarea>
                                    </div>
                                    <div className="col-md-12 mt-4 float-left text-center">
                                        <button className="explore">Submit<span className="icon-right"></span><span className="icon-right after"></span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-5 pr-0">
                            <div id="marvelCodeMap" style={HeightHundredPer}></div>
                        </div>
                          <address></address>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactUs;