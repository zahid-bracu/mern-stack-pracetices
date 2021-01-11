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
        <div>
           <p> Inventory </p>
           <button onClick={()=>addProducts} className="btn btn-info btn-sm">Add Products</button>
        </div>
    );
};

export default Inventory;