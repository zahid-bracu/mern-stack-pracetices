import React from 'react';
import { Button, Card } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
const ProductOrdered = (props) => {

    const { img, name, seller, description,price, stock,key,count } = props.datas;
    console.log(props.datas.count)
    
    return (
        <div>
            <div className="card-custom my-3 row justify-content-center  " style={{width:"600px"}}>
                <div className="col-4">
                    <img style={{maxWidth:"150px"}} src={img}/>
                </div>

                <div className="col-8 ">


                <h6>
                <Link to={"/product/"+key}>
                            {name}
                            </Link>
                </h6>

                <h6>
                    Quantity: {count}
                </h6>
                
                <h6>  Price :  <span class="badge badge-success">{price}$</span> </h6>
                <Button   className="btn btn-danger btn-sm" onClick={()=>props.removeProduct(key)}>Remove</Button>
                </div>

            </div>
             
        </div>
    );
};

export default ProductOrdered;