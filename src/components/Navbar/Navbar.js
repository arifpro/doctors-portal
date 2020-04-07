import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <header className="header">
                <nav className="navbar navbar-expand-lg fixed-top py-3" >   {/* fixed-top */}
                    <div className="container">
                        {/* 
                        <a href="#" className="navbar-brand text-uppercase font-weight-bold">
                             <img src="../../images/tooth.png" alt=""/> 
                        </a> 
                        */}
                        <button type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation" 
                            className="navbar-toggler navbar-toggler-right"
                        >
                            <i className="fa fa-bars"></i>
                        </button>

                        <div id="navbarSupportedContent" className="collapse navbar-collapse customHeader">
                            <ul className="navbar-nav ml-auto customUl1">
                                <li className="nav-item active">
                                    <a href="/" className="nav-link">
                                        <span>Home</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <span>About</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <span>Dental Services</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/doctorLogin" className="nav-link">
                                        <span>Doctor Login</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <span className="cusNavItem">Reviews</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <span className="cusNavItem">Blog</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/contact" className="nav-link">
                                        <span className="cusNavItem">Contact Us</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
             </nav>
            </header>
        </div>
    );
};

export default Navbar;