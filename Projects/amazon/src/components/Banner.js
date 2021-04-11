import React from 'react';
import cover from './images/cover.jpg'
import banner from './images/banner.png'
import './style.css'
import RiskReducer from './RiskReducer';

const Banner = () => {
    return (
        <>
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                    <img src={banner} style={{width:"100%"}}/>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                <h4 className="text-center">Best Service in Asia</h4>
                <p className="text-justify common-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. <span className="text-primary">See More.</span>
                </p>

                <h4 className="text-center">Fastest Service Ever</h4>
                <p className="text-justify common-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. <span className="text-primary">See More.</span>
                </p>

                <h4 className="text-center">Service at your Doorstep</h4>
                <p className="text-justify common-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.<span className="text-primary">See More.</span>
                </p>
                </div>
            </div>
        </div>
     
        </>
    );
};

export default Banner;