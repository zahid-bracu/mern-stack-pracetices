import React from 'react';
import banner from './img/banner/banner.png';
import github from './img/banner/github.png'; 
import linkedin from './img/banner/linkedin.png';
import google from './img/banner/google.png';

const Banner = () => {
    return (
        <div className="container">
            <div className="row justify-content-between align-items-center py-5">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12"  >
                        <div>
                            <h2>Hi all, I'm Zahid <span className="hand">👋</span> </h2>
                            <h4 style={{fontWeight:"350"}}>Software Designer & Developer</h4>
                            <p style={{color:"#868E96"}}  >A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native / Java / Python / Django  and some other cool libraries and frameworks.</p>
                        </div>

                        <div className="d-flex">
                            <a target="_blank" href="https://github.com/zahid-bracu">
                            <img className="contact-logo" src={github} style={{maxWidth:"34px"}} />
                            </a>


                            <a target="_blank" href="https://www.linkedin.com/in/md-zahidur-rahman-54b3ba17b/">
                            <img className="contact-logo ml-2 round-border" src={linkedin} style={{maxWidth:"35px"}} />
                            </a>


                            <a target="_blank" href="mailto:zahid.mym@gmail.com">
                            <img className="contact-logo ml-2 round-border" src={google} style={{maxWidth:"35px"}} />
                            </a>
                        </div>

                        <div className="d-flex mt-2">
                            <button type="button" class="btn btn-outline-dark">Contact Me</button>
                            <button type="button" class="btn btn-dark btn-custom ml-2">Resume</button>
                        </div>
                    </div>

                    

                    <div className="col-lg-4 col-md-12 col-sm-12 d-lg-block d-md-block d-sm-none d-none col-12">
                            <img src={banner} style={{maxWidth:"300px"}} alt=""/>
                    </div>
            </div>
        </div>
        
    );
};

export default Banner;