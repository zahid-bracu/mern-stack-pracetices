import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Banner = () => {
    var imgURL="https://i.ibb.co/nLhLqpm/1079942.png";
    return (
        <div className="my-5">
            <img className="d-block mx-auto img-fluid" style={{maxWidth:"40%"}} src={imgURL}/>
        </div>
    );
};

export default Banner;