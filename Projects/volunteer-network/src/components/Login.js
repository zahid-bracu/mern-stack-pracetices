import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebaseConfig';
import React, {useState,useContext} from 'react';
import './style.css';
import {UserContext} from '../App';
firebase.initializeApp(firebaseConfig);


const Login = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    const [user,setUser]=useContext(UserContext);

    function SignInGoogle(){
        firebase.auth().signInWithPopup(provider).then((result) => {
                    /** @type {firebase.auth.OAuthCredential} */
                    var credential = result.credential;

                    // This gives you a Google Access Token. You can use it to access the Google API.
                    var token = credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;
                    // ...
                     
                     

                    var info={
                        name:user.displayName,
                        mail:user.email
                    }
                    setUser(info);
                    


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

    console.log(user);




    return (
        <div>

            <div className="login-box mx-auto">
                <div className="mini-box">
                        {
                            !user.mail && <>
                            <h5 className="text-center login-text my-4">Login With</h5>
                            <button onClick={SignInGoogle} className="btn btn-custom">
                            <div className="img-logo">
                            <img style={{maxWidth:"40px"}} src="https://img.icons8.com/plasticine/100/000000/google-logo.png"/>
                            </div>
                                Login With Google</button>
                            <p className="text-center my-3">Don't have an account? <a href="#">Create an account</a> </p>
                            </>
                        }

                        {
                            user.mail && <Logout/>
                            
                            
                        }
                </div>
            </div>

        </div>
        
    );
};



const Logout =()=>{
    const [user,setUser]=useContext(UserContext);
    function SignOut(){
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            var info={
                name:"",
                mail:""
            }
            setUser(info);
          }).catch((error) => {
            // An error happened.
          });
    }
    return(
        <>
        <h4 className="text-center">Welcome {user.name}</h4>
                            <button onClick={SignOut} className="btn btn-danger btn-sm mt-5 mx-auto d-block">Logout</button>
        </>
    )
}

export default Login;