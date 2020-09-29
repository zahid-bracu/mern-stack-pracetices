import React from 'react';
import { Button,ButtonGroup   } from 'react-bootstrap';
const Category = () => {
    return (
        
             <div className=" row justify-content-center align-items-center">
                <Button className="mr-3 px-5">Left</Button>
                <Button className="mr-3 px-5">Middle</Button>
                <Button className="mr-3 px-5">Right</Button>
             </div>
    );
};

export default Category;