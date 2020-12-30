import React, { useState, useContext  } from 'react';
import {
    Link
  } from "react-router-dom";
import InfoCard from './InfoCard';
import {UserContext} from '../App';


const Contact = () => {
    const [datas,setData]=useState([])
    const [user,setUser]=useContext(UserContext);
    console.log(user);


    function loadData(){
        fetch('http://localhost:3070/info?userMail='+user.mail)
        .then(response => response.json())
        .then(data => {
            setData(data)
        });
    }

    
    return (
        <div className="container">
            
            <h4 className="text-center">Welcome {user.name}.</h4>
            <h5 className="text-center">Click below to load all of your contacts</h5>
            <button className="mx-auto d-block btn btn-info" onClick={loadData}>Load Your Contacts</button>
            {
                datas.map(key => <InfoCard data={key}></InfoCard>)
            }

            
        </div>
    );
};

export default Contact;