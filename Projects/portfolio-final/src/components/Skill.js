import React from 'react';
import bannerSkill from './img/skill/bannerSkill.png';
import './style.css'
const Skill = () => {
    return (
        <div className="container">
            <div className="row">
                <div  className="banner-left col-lg-4 d-lg-block d-sm-none d-md-none d-none col-md-12 col-sm-12 col-12">
                    <img src={bannerSkill} style={{maxWidth:"300px"}} alt=""/>
                </div>


                <div id="first-banner" className="  col-lg-8 col-md-12 col-sm-12 col-12">
                    <h2 style={{fontWeight:"400"}}>What I do</h2>
                    <h5 style={{fontWeight:"350"}}>
                        Enthusiastic Full Stack Developer who wants to explore every tech stack in development sector</h5>


                    <div>
                        <p>🛠 Develop highly interactive Front end / User Interfaces for your web 🌎 and mobile applications 📱</p>

                        <p>🛠 Develop backend services with Nodejs / Django and Firebase / MongoDB / MySQL  </p>
                    </div>
                </div> 
            </div>     
        </div>
    );
};

export default Skill;