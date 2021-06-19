import React, {useState,useContext, useEffect} from 'react';
import {UserContext} from '../App';
import banner from './image/banner.png'
import banner_two from './image/banner_two.png'
import {
    Link
  } from "react-router-dom";
const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const [user,setUser]=useContext(UserContext);
    console.log(user.flag);
    return (
        <div className="container">
            
            


            <div className="row justify-content-around align-items-center">

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <h1   className="my-2  ">Welcome to Address Book </h1>
            <h4   className="   ">Version 2.0 (2020 Edition)</h4>
            <p   className=" ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s .</p>

            <div className="d-block" style={{background:"none", maxWidth:"52.9px" }}>
            {
                        !user.flag && <Link style={{textDecoration:"inherit"}} to="/login">
                        <button className="btn btn-outline-dark my-2 d-block  "  >Login</button>
                        </Link>
                    }
                    {
                        user.flag && 
                        <> 

                        <Link style={{textDecoration:"inherit"}} to="/login">
                        <button className="btn btn-outline-dark my-2 d-block">Account</button>
                        </Link>

                    
                        </>
                    }
            </div>
            
            </div>

            <img className="d-block col-lg-6 col-md-6 col-sm-12 col-12 mx-auto" style={{width:"100%",maxWidth:"400px"}} src={banner}/>
            </div>



            <div className="row justify-content-around align-items-center">


            <img className="d-block col-lg-6 col-md-6 col-sm-12 col-12 mx-auto" style={{width:"100%",maxWidth:"340px"}} src={banner_two}/>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <h3   className="my-2  ">What is Address Book </h3>
            <p   className="text-justify ">An address book or a name and address book is a book or a database used for storing entries called contacts. Each contact entry usually consists of a few standard fields (for example: first name, last name, company name, address, telephone number, e-mail address, fax number, mobile phone number).</p>

            <button className="btn btn-outline-dark">Contact</button>
            
            </div>

            
            </div>


            {/* <div className="d-block mx-auto" style={{background:"none", maxWidth:"152.9px" }}>
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
            </div> */}


            <div className="row justify-content-center align-items-center my-5">
                <div className="  col-lg-3"><div style={{background:"#222831"}} className="card mx-auto my-2">
                    <h1 style={{color:"#EFF8FF"}} className="text-center my-auto">CREATE</h1>
                </div>
                </div>
                <div  className="  col-lg-3"><div style={{background:"#DDDDDD"}} className="card mx-auto my-2">

                <h1 style={{color:"#222831"}} className="text-center my-auto">READ</h1>
                </div>
                
                </div>

                <div  className="  col-lg-3"><div style={{background:"#F05454"}} className="card mx-auto my-2">
                <h1 style={{color:"#EFF8FF"}} className="text-center my-auto">UPDATE</h1>
                </div>

                </div>

                <div className="  col-lg-3 "><div style={{background:"#30475E"}} className="card mx-auto my-2">
                <h1 style={{color:"#EFF8FF"}} className="text-center my-auto">DELETE</h1>
                </div>
                </div>
            </div>

            <div>
                <p className="text-justify crud-card">
                    <h4 className="text-center">What is CRUD?</h4>
                CRUD Meaning: CRUD is an acronym that comes from the world of computer programming and refers to the four functions that are considered necessary to implement a persistent storage application: create, read, update and delete. Persistent storage refers to any data storage device that retains power after the device is powered off, such as a hard disk or a solid-state drive. In contrast, random access memory and internal caching are two examples of volatile memory - they contain data that will be erased when they lose power.
                </p>
            </div>



            <div>


            </div>
             

        </div>
    );
};

export default Home;