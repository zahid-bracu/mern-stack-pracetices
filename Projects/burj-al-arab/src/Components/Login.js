 
import firebase from 'firebase/app';
import 'firebase/firestore';

import "firebase/auth";
import "firebase/firestore";
import GoogleButton from 'react-google-button'

import firebaseConfig from './firebaseConfig';
import './style.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation
  } from "react-router-dom";
  
import React, {useState,useContext} from 'react';
import {UserContext} from '../App';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

firebase.initializeApp(firebaseConfig);

const Login = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    const [user,setUser]=useContext(UserContext);

    const classes = useStyles();

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/login" } };



    function logoutGoogle(){
        firebase.auth().signOut().then(function() {
            var newInfo={
                name:"",
                email:"",
                state:false
            }
            setUser(newInfo);
          }).catch(function(error) {
            // An error happened.
          });
    }

    function loginGoogle(){
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var name = result.user.displayName;
            var email = result.user.email;
            var state=result.user.emailVerified;
            var newInfo={
                name:name,
                email:email,
                state:state
            }

            setUser(newInfo);
            storeAuthToken();
            history.replace(from);
            // ...
             

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


    // token for verifying
    const storeAuthToken=()=>{
      firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        console.log(idToken);
        sessionStorage.setItem('token',idToken);
      }).catch(function(error) {
        // Handle error
      });
    }
    return (
        <div >
            {
                !user.state && <GoogleButton onClick={loginGoogle} className="google-bg mx-auto d-block " style={{marginTop:"80px"}}
                type="light" // can be light or dark
                
                />
            }

            {
                user.state && <div className={classes.root}>
                <h3 className="text-center my-5 text-secondary"> {user.name} Logged in </h3>
                <Button onClick={logoutGoogle} variant="contained" className="d-block mx-auto my-5" style={{padding:"10px 90px"}}> 
                <span className="font-weight-bold text-secondary"> Logout</span>
                </Button>             
            </div>
            }



            
        </div>
    );
};

export default Login;