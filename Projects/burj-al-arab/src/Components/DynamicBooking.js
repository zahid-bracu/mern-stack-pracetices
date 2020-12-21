import React,{useEffect,useState, useContext} from 'react';
import DynamicInfoCard from './DynamicInfoCard';
import {DateContext} from '../App';
import {UserContext} from '../App';


const DynamicBooking = () => {
    const [user,setUser]=useContext(UserContext);
    const [database,setDatabase]=useState([]);
    useEffect(() => {
        fetch('http://localhost:9000/showBooking?email='+user.email)
                .then(response => response.json()) //all datas are got
                .then(json => {load(json)})
    },[])
    function load(data){
        console.log(data);
        setDatabase(data);
    }

    console.log(database);
    return (
        <div className="container">
            <h5 className="text-center my-5">Here All Your Bookings</h5>
            <div className="row justify-content-center">
            {
                 database.map(key=><DynamicInfoCard  info={key}></DynamicInfoCard>)
            }
            </div>
            
        </div>
    );
};

export default DynamicBooking;