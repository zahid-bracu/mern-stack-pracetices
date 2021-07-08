import React from 'react';
import { Form } from 'react-bootstrap';
import './style.css';
import logo2 from './resources/logo2.png';
const Banner = () => {
    return (
        <div className=" ">
             
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <h1 className="text-center custom-font red-color">LOS POLLOS HERMANOS</h1>
                    <p className="text-center custom-font yellow-color ">Best Food Restaurant in Mymensingh Locality</p>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <img style={{maxWidth:"400px",width:"95%"}} className="d-block mx-auto" src={logo2}/>
                </div>
            </div>
        </div>
    );
};

export default Banner;