import React, {useState,useEffect} from 'react';
import Data from './Data';
import FoodCart from './FoodCart';
import './style.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

   


const DataLoad = () => {

    const [filter,setFilter]=useState('All');

    const [data,setData]=useState([]);

    const [flag,setFlag]=useState(false);


    useEffect(() => {
         
        if(filter==="All"){
            var datas=Data.slice(0,6)
            setData(datas)
        }else{
            var datas=Data.filter(key=> key.type==filter);
            setData(datas);
        }
    }, [filter])
    

    
     
    
    return (
        <div>
             <div className="btn-filter mt-5">
                <button onClick={()=>setFilter('All')} className="btn font-weight-bold btn-select btn-light mx-3">All</button>
                 <button onClick={()=>setFilter('Breakfast')} className="btn font-weight-bold btn-select btn-light mx-3">Breakfast</button>
                 <button onClick={()=>setFilter('Lunch')} className="btn font-weight-bold btn-select btn-light mx-3">Lunch</button>
                 <button onClick={()=>setFilter('Dinner')} className="btn font-weight-bold btn-select btn-light mx-3">Dinner</button>
             </div>

             <div className="container">
                <div className="row align-items-center justify-content-center mt-5">
                    {
                        data.map(key => <FoodCart  info={key}/>)
                    }
                </div>
                 <div className="d-block mx-auto" style={{width:"135px"}}>
                    <Link to="/foods">
                        <button  className="mx-auto d-block btn btn-success">Show All Foods</button>
                    </Link>
                 </div>
             </div>
        </div>
    );
};


 

export default DataLoad;