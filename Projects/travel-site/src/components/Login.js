import React from 'react';
import GoogleButton from 'react-google-button'
import './style.css';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const Login = () => {
    return (
        <>
            <GoogleButton className="google-button d-block mx-auto my-5"
                    onClick={() => { console.log('Google button clicked') }}
            />
        </>
    );
};

export default Login;