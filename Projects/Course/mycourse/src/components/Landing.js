import React from 'react';

const Landing = () => {
    const img="https://i.ibb.co/ynyCnpq/FAVPNG-training-business-corporate-education-information-y-CS003vu.png";
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
            <div className="col-lg-6">
                <h2>Welcome</h2>
                <h5>To</h5>
                <h1>Developers & Programmers Learning Academy</h1>
            </div>
            <div className="col-lg-6">
                <img className="img-fluid" src={img}/>
            </div>
        </div>
        </div>
    );
};

export default Landing;