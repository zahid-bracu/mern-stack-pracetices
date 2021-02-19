import React, {useState,useContext} from 'react';
import {
    Link
  } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebaseConfig';
import {UserContext} from '../App';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    
const [user,setUser]=useContext(UserContext);

    const provider = new firebase.auth.GoogleAuthProvider();

    function googleSignIn(){
        firebase.auth().signInWithPopup(provider).then(function(result) {
            console.log("worked");
            console.log(result);
            var mail=result.additionalUserInfo.profile.email;
            var name=result.additionalUserInfo.profile.given_name+" "+result.additionalUserInfo.profile.family_name;
            console.log(name);

            var infos={...user};
            infos.name=name;
            infos.mail=mail;
            infos.flag=true;
            setUser(infos);
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }


    function googleSignOut(){
        firebase.auth().signOut().then(function() {
            var infos={...user};
            infos.name="";
            infos.mail="";
            infos.flag=false;
            setUser(infos);
          }).catch(function(error) {
            // An error happened.
          });
    }

    return (
        <div>

            {
                !user.flag && <button 
                onClick={()=>googleSignIn()}
                style={{padding:"10px 40px"}} className="btn btn-outline-primary btn-sm font-weight-bold d-block mx-auto mt-5 text-center">🌏 Login with Google</button>
            }

            {
                user.flag && <>
                <h5 className="text-center my-3">Welcome {user.name}</h5>
            <h6 className="text-center">Mail : {user.mail}</h6>
                    <button 
                    onClick={()=>googleSignOut()}
                    style={{padding:"10px 40px"}} className="btn btn-danger btn-sm font-weight-bold d-block mx-auto mt-3 text-center">Logout</button>
                </>
            }
            


            
            
            
            <div className="d-block mx-auto mt-5" style={{background:"none", maxWidth:"152.9px" }}>
                <div className="d-inline-block text-center">
                    

                    
                    
                    {
                        user.flag && <>
                        
                        <Link style={{textDecoration:"inherit"}} to="/contact">
                            <button className="btn btn-primary d-block my-2 mx-auto">Show All Contacts</button>
                        </Link>
                        <Link style={{textDecoration:"inherit"}} to="/form">
                            <button className="btn btn-secondary text-white my-2 d-block mx-auto">Add New Contact</button>
                        </Link>
                        </>
                    }
                    


                    <Link style={{textDecoration:"inherit"}} to="/home">
                        <button className="btn btn-success text-white my-2 px-4 d-block mx-auto">Back to Home</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Login;