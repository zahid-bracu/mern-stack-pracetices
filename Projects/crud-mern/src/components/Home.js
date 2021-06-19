import React, {useState,useContext, useEffect} from 'react';
import {UserContext} from '../App';
import banner from './image/banner.png'
import banner_two from './image/banner_two.png'
import {
    Link
  } from "react-router-dom";

import nodejs2 from './image/tools/nodejs2.png';
import react from './image/tools/react.png';
import mongodb from './image/tools/mongodb.png';
import javascript from './image/tools/javascript.png';
const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const [user,setUser]=useContext(UserContext);
    console.log(user.flag);
    return (
        <>
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
            <div className="d-block" style={{background:"none", maxWidth:"102.9px" }}>
                <Link to='/contactus'>
                <button className="btn btn-outline-dark">Contact Us</button>
                </Link>
         
            </div>
            
            
            </div>

            
            </div>


             

            <h4 className="text-center mt-5 text-dark">This Application Operates in CRUD method</h4>
            <div className="row justify-content-center align-items-center mt-5">
                
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

            <div className="mt-5">
                <p className="text-justify crud-card">
                    <h4 className="text-center">What is CRUD?</h4>
                CRUD Meaning: CRUD is an acronym that comes from the world of computer programming and refers to the four functions that are considered necessary to implement a persistent storage application: create, read, update and delete. Persistent storage refers to any data storage device that retains power after the device is powered off, such as a hard disk or a solid-state drive. In contrast, random access memory and internal caching are two examples of volatile memory - they contain data that will be erased when they lose power.
                </p>
            </div>



            <div>


            </div>
             
            <UsedTool/>
        </div>
    
         
        </>
    );
};

export default Home;


function UsedTool(){
    return(
        <>
        <h4 className="text-center mt-5" style={{color:"#393E46"}}>Tools</h4>
        <div className="row ">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <img className="tools-img mx-auto d-block" src={react} />
            <p className="text-center">React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. </p>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <img className="tools-img  mx-auto d-block" src={nodejs2} />
            <p className="text-center">Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature</p>
            </div>
            
           <div className="col-lg-4 col-md-6 col-sm-12 col-12">
           <img className="tools-img  mx-auto d-block" src={mongodb} />
           <p className="text-center">MongoDB is a document-oriented database which stores data in JSON-like documents with dynamic schema</p>
           </div>
            
        </div>
        </>
    )
}