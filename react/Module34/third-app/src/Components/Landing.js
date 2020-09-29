import React from 'react';

const Landing = () => {
    var imgURL="https://i.ibb.co/SfWRP6s/kisspng-e-commerce-online-shopping-business-process-vector-global-purchase-5a8907a48aa4d3-1632139015.png";
    var logo="https://i.ibb.co/j6Ls0F8/5f6cb2d88d716.png";
    return (
        <div className="container-fluid row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <img className="img-fluid" src={imgURL} alt=""/>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                 
                <img src={logo} className="img-fluid" alt=""/>
            </div>
        </div>
    );
};

export default Landing;