import React, {useState,useEffect} from 'react';
import CountryInfo from './CountryInfo';
import {addToDatabaseCart,removeFromDatabaseCart,getDatabaseCart} from './utilities/databaseManager';
import './style.css';
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

           setData(json);


           
        })


         

        
    },[])


    useEffect(()=>{

        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(json =>{

            var selectedCountries=getDatabaseCart();
            var selectedCountriesKey=Object.keys(selectedCountries);
            console.log(selectedCountriesKey);
            console.log(json.length)
            const previousCountries=selectedCountriesKey.map(it=>{
                var country=json.filter(key=> key.numericCode==it);
                return country;
            });
            var array=[];
            for(var i=0;i<previousCountries.length;i++){
                array.push(previousCountries[i][0])
            }

            console.log(array);
            setVisit(array);
             

        })

         
    },[])

    function addCountry(country){
         
        var newCountries=[...visit,country];
         
        setVisit(newCountries);
        
        addToDatabaseCart(country.numericCode,0)
    }

    
    return (
        <>
        <h5 className="text-center my-4 bold">Total countries are loaded from API : <span className="text-danger">{length}</span> </h5>
        <h6 className="text-center mb-4">In this interface : Showing <span className="text-danger bold">20</span>  Countries</h6>
        <h5 className="text-center mb-4">You have added <span className="text-danger">{visit.length}</span> countries in your visiting plan</h5>
        <div className="container">
        <div className="row  justify-content-center align-items-center">
         {
             data.map(key=> <CountryInfo addCountry={addCountry}  datas={key}/>)
         }   
        </div>
        </div>
        </>
    );
};

export default Countries;