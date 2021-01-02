import React, { useState, useContext, useEffect  } from 'react';
import {
    Link
  } from "react-router-dom";
import InfoCard from './InfoCard';
import {UserContext} from '../App';


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
            
            <h4 className="text-center">Welcome {user.name}.</h4>
            
            
            {
                 
              flag ? datas.length === 0 ? <h4 className="my-5 text-center">Your Contact List is Empty</h4> : datas.map(key => <InfoCard data={key}></InfoCard>) : <h4 className="my-5 text-center">Loading...</h4>
                
            }

             

            
        </div>
    );
};

export default Contact;