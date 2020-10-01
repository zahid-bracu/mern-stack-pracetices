import React from 'react';


const Banner = () => {
    var imgURL="https://i.ibb.co/nLhLqpm/1079942.png";
    return (
        <div className="my-5">
            <img className="d-block mx-auto img-fluid" style={{maxWidth:"800px"}} src={imgURL}/>
        </div>
    );
};

export default Banner;