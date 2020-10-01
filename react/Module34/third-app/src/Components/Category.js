import React from 'react';
import { Button,ButtonGroup   } from 'react-bootstrap';
const Category = (props) => {
    return (
        <>
            <h5 className="text-center d-block mb-3 mt-5">Sort Products by Category:</h5>
             <div className="row justify-content-center align-items-center mb-3">
                <Button onClick={()=>props.categories("All")} className="mr-3 px-4 btn-warning  ">All Products</Button>
                <Button onClick={()=>props.categories("android")} className="mr-3 px-5 btn-warning  ">Android</Button>
                <Button onClick={()=>props.categories("camera")} className="mr-3 px-5 btn-warning  ">Camera</Button>
                <Button onClick={()=>props.categories("laptop")} className="mr-3 px-5 btn-warning  ">Laptop</Button>
             </div>
            
        </>
    );
};

export default Category;