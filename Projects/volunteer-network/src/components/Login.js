import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebaseConfig';
import React from 'react';
import './style.css';
firebase.initializeApp(firebaseConfig);


const Login = () => {
    var provider = new firebase.auth.GoogleAuthProvider();


    function SignInGoogle(){
        firebase.auth().signInWithPopup(provider).then((result) => {
                    /** @type {firebase.auth.OAuthCredential} */
                    var credential = result.credential;

                    // This gives you a Google Access Token. You can use it to access the Google API.
                    var token = credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;
                    // ...
                    console.log(user.email);
                    console.log(user.displayName);
                }).catch((error) => {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage);
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    // ...
                });
    }

    return (
        <div>

            <div className="login-box mx-auto">
                <div className="mini-box">
                        <h5 className="text-center login-text my-4">Login With</h5>
                        <button onClick={SignInGoogle} className="btn btn-custom">
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