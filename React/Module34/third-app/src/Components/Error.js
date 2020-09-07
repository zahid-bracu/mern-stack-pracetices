import React from 'react';

const Error = () => {
    var img="https://i.ibb.co/gdpX7Pd/404-error-not-found-page-lost-1024x788.png";
    return (
        <div>
           <div className="row justify-content-center align-items-center">
                <img src={img}/>
           </div>
        </div>
    );
};

export default Error;