import React, {useState,useContext} from 'react';
import {UserContext} from '../App';
import {
    Link
  } from "react-router-dom";
const Home = () => {
    const [user,setUser]=useContext(UserContext);
    console.log(user.flag);
    return (
        <div>
            <h1 className="my-2 text-center">Welcome to Address Book </h1>
            <h4 className="mb-5 text-center">Version 2.0 (2020 Edition)</h4>


            <div className="d-block mx-auto" style={{background:"none", maxWidth:"152.9px" }}>
                <div className="d-inline-block text-center">
                    {
                        !user.flag && <Link style={{textDecoration:"inherit"}} to="/login">
                        <button className="btn btn-success my-2 d-block mx-auto" style={{padding:"6px 55px"}}>Login</button>
                        </Link>
                    }
                    {
                        user.flag && 
                        <> 

                        <Link style={{textDecoration:"inherit"}} to="/login">
                        <button className="btn btn-danger my-2 d-block mx-auto" style={{padding:"6px 50px"}}>Account</button>
                        </Link>

                        <Link style={{textDecoration:"inherit"}} to="/contact">
                            <button className="btn btn-primary d-block my-2 mx-auto">Show All Contacts</button>
                        </Link>
                    
                        <Link style={{textDecoration:"inherit"}} to="/form">
                            <button className="btn btn-secondary text-white my-2 d-block mx-auto">Add New Contact</button>
                        </Link>
                        </>
                    }
                    
                </div>
            </div>

        </div>
    );
};

export default Home;