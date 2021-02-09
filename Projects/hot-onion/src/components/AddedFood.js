import React, {useEffect, useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import './style.css';
import Data from './Data';
import {addToDatabaseCart, getDatabaseCart} from './databaseManager';
import AddedFoodDetail from './AddedFoodDetail';
import { useHistory } from "react-router-dom";
const AddedFood = () => {
    const [foods,setFoods]=useState([]);

    let history = useHistory();

    useEffect(() => {
        
        var data=getDatabaseCart();
        var item_keys=Object.keys(data);
        const added_items=item_keys.map(key=>{
            const item=Data.find(id=> id.id==key);
            item.count=data[key];
            return item;
        })

        setFoods(added_items);
    }, [])
    console.log(foods);

    var totalPayment=foods.reduce((payment,key)=>{
        var temp=key.price*key.count;
        payment=payment+temp;
        return payment;
    },0)

    var vat=15;
    var tax=parseInt(totalPayment)/100;
    tax=tax*parseInt(vat);

    var inTotal=totalPayment+tax+50;

    var total=foods.reduce((sum,key)=>{
        sum=sum+key.count;
        return sum;
    },0);
    console.log(total);


    function checkOut(){
        history.push("/checkout");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-7">
                    {
                        foods.map(key=> <AddedFoodDetail infos={key}/>)
                    }
                </div>
                <div className="col-lg-5  col-md-12 col-sm-12 col-12 mt-4">
                    <div>
                        <h4> From <strong className="text-danger">Red Onion Foods Restaurant</strong></h4>
                        <h5>Arriving in 10-20 min</h5>
                        <h6>House no. 105, Road no. 11-B</h6>
                        <h6>Aqua</h6>
                        <h6>Mymensingh</h6>
                    </div>
                    <div style={{maxWidth:"250px"}} className="mt-5">
                        <p className="d-flex justify-content-between"><span>Sub Total . {total} Item</span> <span>${totalPayment}</span></p>
                        <p className="d-flex justify-content-between"><span>Tax</span> <span>${tax}</span></p>
                        <p className="d-flex justify-content-between"><span>Delivery Fee</span> <span>$50.00</span></p>
                        <hr/>
                        <h5 className="d-flex justify-content-between"><span>Total</span> <span>${inTotal}</span></h5>
                        <button onClick={checkOut} className="btn btn-success mt-4">Proceed to CheckOut</button>
                        <p className="text-danger mt-2" id="proceed-error" style={{display:"none"}}>Complete Your Payment</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddedFood;