import React from 'react';
import './style.css'
const Login = () => {
    return (
        <div>

            <div className="login-box mx-auto">
                <div className="mini-box">
                        <h5 className="text-center login-text my-4">Login With</h5>
                        <button className="btn btn-custom">
                        <div className="img-logo">
                        <img style={{maxWidth:"40px"}} src="https://img.icons8.com/plasticine/100/000000/google-logo.png"/>
                        </div>
                            Login With Google</button>
                        <p className="text-center my-3">Don't have an account? <a href="#">Create an account</a> </p>
                </div>
            </div>

        </div>
        
    );
};

export default Login;