import React from 'react';
import {
    Link
  } from "react-router-dom"
const RegMsg = () => {
    return (
        <div>
            <h2 className="text-center my-5">Registration Successful</h2>
            <h6 className="text-center my-5">
                <Link to="/login">
                    Login Here
                </Link>
            </h6>
        </div>
    );
};

export default RegMsg;