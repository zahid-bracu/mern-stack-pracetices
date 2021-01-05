import React from 'react';
import Card from './Card';
import Data from './Data';
const Works = () => {
    
    console.log(Data);
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
            {
                Data.map(data=> <Card data={data}></Card>)
            }
        </div>
        </div>
        
    );
};

export default Works;