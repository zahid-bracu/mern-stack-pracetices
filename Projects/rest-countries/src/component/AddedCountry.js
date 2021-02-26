import React, {useEffect,useState} from 'react';
import AddedCountryInfo from './AddedCountryInfo';
import {addToDatabaseCart,removeFromDatabaseCart,getDatabaseCart} from './utilities/databaseManager';
import './style.css';
const AddedCountry = () => {
    const [countries,setCountries]=useState([]);
    const [flag,setFlag]=useState(false);
    function remove(keys) {
        console.log(keys)
        var temp=countries.filter(key=>key[0].numericCode!=keys);
        setCountries(temp);
        removeFromDatabaseCart(keys);
    }

    useEffect(()=>{
        var selectedCountries=getDatabaseCart();
         

        var numericCode=Object.keys(selectedCountries);
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(json => {
           var countriesAdded=numericCode.map(key=>{
               var country=json.filter(id=> id.numericCode===key)
               return country;
           })
           setCountries(countriesAdded);
        })
    },[])

    var display="";
    if(countries.length>0){
        display=countries.map(key=> <AddedCountryInfo remove={remove} datas={key[0]} />);
    }else{
        display=<h1 className="d-block mx-auto my-5 text-danger">You didn't Select Any Country</h1>
    }

    
    return (
        <div className="container">
            <h5 className="text-center my-3 text-success">You have added {countries.length} countries</h5>
            
                <div className="row justify-content-center align-items-center">
                {
                     display
                }
                </div>
            
        </div>
        
    );
};

export default AddedCountry;