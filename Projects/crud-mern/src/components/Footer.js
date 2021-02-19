import React from 'react';
import './style.css'
const Footer = () => {
    return (
        <div className="container footer mt-5">
            <hr/>
            <div className="row  justify-content-around ">
                
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                    <ul className="list-unstyled">
                        <li>Home</li>
                        <li>Service</li>
                        <li>Contact</li>
                        <li>Policies</li>
                    </ul>
                </div>
    
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                    <ul className="list-unstyled ">
                        <li>Google+</li>
                        <li>Yahoo!</li>
                        <li>Nogorbalok</li>
                        <li>mig33.com</li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                    <ul className="list-unstyled ">
                        <li>Docs</li>
                        <li>Pricing</li>
                        <li>Support</li>
                        <li>News</li>
                    </ul>
                </div>


                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                    <ul className="list-unstyled ">
                        <li>Community Guidelines</li>
                        <li>Sales Solutions</li>
                        <li>Careers</li>
                        <li>Small Business</li>
                    </ul>
                </div>

            </div>
            <p className="text-center mt-3">Zahid's Programming Initiative ©️ 2020 All rights Reserved</p>
        </div>
    );
};

export default Footer;