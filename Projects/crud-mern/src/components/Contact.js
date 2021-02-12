import React, { useState, useContext, useEffect  } from 'react';
import {
    Link
  } from "react-router-dom";
import InfoCard from './InfoCard';
import {UserContext} from '../App';
import contacts from './image/contacts.png';
import './style.css'; 
const Contact = () => {
    const [datas,setData]=useState([])
    const [flag,setFlag]=useState(false)
    const [user,setUser]=useContext(UserContext);
    console.log(user);
    document.title="Contact List"
    useEffect(() => {
        
      fetch('http://localhost:3070/info?userMail='+user.mail)
        .then(response => response.json())
        .then(data => {
            setData(data)
            setFlag(true)
        });

        
      });


     

    
    return (
        <div className="container">
            
            <h4 className="text-center mt-4">Welcome {user.name}.</h4>
            <h5 className="text-center mt-2">Contact list are given below</h5>
            
            <div className="container ">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-block ">
                {
                  
                  flag ? datas.length === 0 ? <h4 className="my-5 text-center">Your Contact List is Empty</h4> : datas.map(key => <InfoCard data={key}></InfoCard>) : <h4 className="my-5 text-center">Loading...</h4>
                    
                }
                </div>

                <div className="col-lg-6 d-lg-block d-md-none d-sm-none d-none  ">
                  <img className="banner-img" src={contacts} style={{maxWidth:"300px"}}/>
                </div>
              </div>
            </div>
            

             

            
        </div>
    );
};

export default Contact;