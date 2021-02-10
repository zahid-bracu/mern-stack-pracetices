import React from 'react';
import fakeData from './fakeData';
const Inventory = () => {
    console.log(fakeData); 

    function addProducts(){
            fetch('http://localhost:3010/addProducts',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(fakeData)
        })
    }

    return (
        <div className="container">
           <h3 className="text-center my-4"> Inventory </h3>
           <button onClick={()=>addProducts} className="d-block mx-auto btn btn-info btn-sm">Add Products</button>
        </div>
    );
};

export default Inventory;