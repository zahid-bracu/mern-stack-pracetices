import React, { useEffect, useState } from 'react';
import { Button,Card } from 'react-bootstrap';
import InfoCard from './InfoCard';
const DataLoad = () => {
    const [data,setData]=useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            setData(json)
        })
      },[]);
    return (
        <div className="container">
            <div className="row">
        {
            data.map(key=> <InfoCard datas={key}></InfoCard>)
        }
        </div>
        </div>
    );
};

export default DataLoad;