import React from 'react';
import cpscm from './img/education/cpscm.jpg';
import bracu_logo from './img/education/bracu_logo.png';
import banner_edu from './img/education/banner-edu.jpg'
import './style.css';
const Education = () => {
    
    return (
        <div className="container my-5">
            
           <div className="row justify-content-center align-items-center">
           <div className="banner-left col-lg-8 col-md-12 col-sm-12 col-12">
           <h2 className="mb-3" style={{fontWeight:"400"}}>Education</h2>
                <div className="mb-4">
                    <img src={bracu_logo} style={{maxWidth:"70px"}}/>
                    <h4 style={{fontWeight:"400"}}>BRAC University</h4>
                    <h5 style={{fontWeight:"400"}}>Bachelor of Science in Computer Science</h5>
                    <h6 style={{fontWeight:"400"}}>January 2015 - December 2019</h6>
                    <h6 style={{fontWeight:"450"}}>Thesis: <a title="Click here to see the Research" target="_blank" className="text-dark  thesis" style={{textDecoration:"inherit"}} href="http://dspace.bracu.ac.bd/xmlui/handle/10361/14054">Human Activity Recognition using wearable body sensor by machine learning approach</a></h6>
                </div>
                
                
                <div  className="my-4">
                    <img src={cpscm} style={{maxWidth:"70px"}}/>
                    <h4 style={{fontWeight:"400"}}>Cantonment Public School & College, Mymensingh</h4>
                    <h5 style={{fontWeight:"400"}}>Nursery to 12th</h5>
                    <h6 style={{fontWeight:"400"}}>Attended Secondary & Higher Secondary School Certificate Board Examination</h6>
                    <h6 style={{fontWeight:"400"}}>1998 - 2013</h6>
                </div>
            </div>

            <div id="first-banner" className=" col-lg-4 col-md-12 col-sm-12 col-12 d-lg-block d-md-none d-sm-none d-none">
                <img src={banner_edu} style={{maxWidth:"400px"}} alt=""/>
            </div>
           </div>
        </div>
    );
};

export default Education;