import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div>
            <div className="cusFooterContainer1">
                <div>
                <div className="container cusFooter">
                    <div className="row">
                        <div className="col-md-3">
                            <h5> <br/></h5>
                            <h6>Emergency Dental Care</h6>
                            <h6>Check Up</h6>
                            <h6>Treatment of Personal Diseases</h6>
                            <h6>Tooth Extraction</h6>
                            <h6>Check Up</h6>
                        </div>
                        <div className="col-md-3">
                            <h5>Services</h5>
                            <h6>Emergency Dental Care</h6>
                            <h6>Check Up</h6>
                            <h6>Treatment of Personal Diseases</h6>
                            <h6>Tooth Extraction</h6>
                            <h6>Check Up</h6>
                            <h6>Check Up</h6>
                            <h6>Check Up</h6>
                        </div>
                        <div className="col-md-3">
                            <h5>Oral Health</h5>
                            <h6>Emergency Dental Care</h6>
                            <h6>Check Up</h6>
                            <h6>Treatment of Personal Diseases</h6>
                            <h6>Tooth Extraction</h6>
                            <h6>Check Up</h6>
                            <h6>Check Up</h6>
                            <h6>Check Up</h6>
                        </div>
                        <div className="col-md-3">
                            <h5>Our Address</h5>
                            <h6>New York - 101010 Hudson<br/>Yards</h6>
                            <ul className="footerSocialIcon">
                                <li><SocialIcon url="https://facebook.com/" /></li>
                                <li><SocialIcon url="https://google.com/" /></li>
                                <li><SocialIcon url="https://twitter.com/" /></li>
                            </ul>
                            <br/><br/>
                            <h6>Call Now</h6>
                            <button className="getAppointmentBtn">+2025550295</button>
                        </div>
                    </div>
                </div>
                <br/><br/>
                <footer className="text-center">Copyright 2020 All Right Reserved</footer>
            </div>
            </div>
        </div>
    );
};

export default Footer;