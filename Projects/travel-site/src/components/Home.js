import React, { useState } from 'react';
import Database from './Database';
import ImageDisplay from './ImageDisplay';

const Home = () => {
    const [db,setDb]=useState(Database);
    const [id,setID]=useState();
    const [dis,setDis]=useState([{
        name:"",
        description:"",
        photo:"",
        key:null
    }]);

    function display(key){
    
        const items=db.filter(id=> id.key==key);
        setDis(items);
    }
    console.log(dis[0]);

    function empty(){
        const items=[
            {
                name:"",
                description:"",
                photo:"",
                key:null
            }
        ]
        setDis(items);
    }
   
     
    return (
        <div className="container">
            
            <div className="row">
            <div className="col-3 my-5 text-center justify-item-center align-items-center">
                <h5>
                     {dis[0].name}
                </h5>
                <p>
                   {dis[0].description}
                </p>
                {
                    dis[0].key && <button className="btn btn-warning">Book Now</button>
                }
            </div>
            {
                db.map(key=> <ImageDisplay empty={empty} display={display} db={key}   ></ImageDisplay>)
            }
            </div>
        </div>
        
    );
};

export default Home;