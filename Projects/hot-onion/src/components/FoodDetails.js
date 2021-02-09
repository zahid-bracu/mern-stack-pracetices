import React, {useEffect,useState, useContext} from 'react';
import Data from './Data';
import { useParams } from "react-router-dom";
import './style.css';
import {addToDatabaseCart, getDatabaseCart} from './databaseManager';
import {FoodContext} from '../App';
import Count from './Count';

const FoodDetails = () => {

    const [foodCart,setFoodCart]=useContext(FoodContext);
    const [count,setCount]=useState(0);
    const {id} =useParams();
    var food=Data.filter(key=> key.id==id);
    
    var detail=food[0];
    const [photo,setPhoto]=useState(detail.images[0]);

    useEffect(() => {
        var foods=getDatabaseCart();
        console.log(foods)
    }, [foodCart])

    function addFood(food) {
        food.count=count;
        var newFood={...foodCart,food};
        addToDatabaseCart(food.id,food.count);
        setFoodCart(newFood);
    }
    
     

    
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h1 className="mb-4">{detail.name}</h1>
                    <p style={{maxWidth:"400px"}} className="text-justify mb-4">{detail.fullDescription}</p>
                    <h3>Price: ${detail.price}</h3>
                    
                    <Count count={count} setCount={setCount}/>

                    <button onClick={()=>addFood(detail)} className="btn-add btn btn-danger mt-3 " >Add</button>
                    
                    <div className="mt-4">
                        <img onClick={()=>setPhoto(detail.images[0])} className="mx-2" style={{maxWidth:"150px"}} src={detail.images[0]} />
                        <img onClick={()=>setPhoto(detail.images[1])} className="mx-2" style={{maxWidth:"150px"}} src={detail.images[1]} />
                    </div>
                </div>

                <div className="col-6">
                    <img style={{maxWidth:"500px"}} src={photo}/>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;