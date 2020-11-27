import React from 'react';
import banner from './img/banner/banner.png';
const Banner = () => {
    return (
        <div className="container">
            <div className="row justify-content-between align-items-center">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12"  >
                        <h2>Hi all, I'm Zahid <span className="hand">👋</span> </h2>
                        <h4 style={{fontWeight:"350"}}>Software Designer & Developer</h4>
                        <p style={{color:"#868E96"}} className="text-justify">A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native / Java / Python / Django  and some other cool libraries and frameworks.</p>

                        <div className="d-flex">
                        <button type="button" class="btn btn-outline-dark">Contact Me</button>
                        <button type="button" class="btn btn-dark btn-custom ml-2">Resume</button>
                    </div>

                    
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <img src={banner} style={{maxWidth:"300px"}} alt=""/>
                    </div>
            </div>
        </div>
        
    );
};

export default Banner;