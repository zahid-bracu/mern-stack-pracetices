import React, {useState,useEffect} from 'react';
import CountryInfo from './CountryInfo';

const Countries = () => {
    const [data,setData]=useState([]);
    const [length,setLength]=useState();
    const [visit,setVisit]=useState([]);

    const shuffle = a => {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }

    useEffect(()=>{
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(json => {
            setLength(json.length);
           shuffle(json);
           json=json.slice(0,20);
           console.log(json);

           setData(json);
        })
    },[])

    function addCountry(country){
         
        var newCountries=[...visit,country];
        setVisit(newCountries);
    }

    console.log(visit);
    return (
        <>
        <h5 className="text-center my-4">Total countries are loaded from API : {length}</h5>
        <h6 className="text-center mb-4">Showing 20 Countries</h6>
        <h5 className="text-center mb-4">You have added <span className="text-danger">{visit.length}</span> countries in your visiting plan</h5>
        <div className="row container justify-content-center align-items-center">
         {
             data.map(key=> <CountryInfo addCountry={addCountry}  datas={key}/>)
         }   
        </div>
        </>
    );
};

export default Countries;