import React, {useState,useContext,useEffect} from 'react';
import {UserContext} from '../../App';
export default function UserOder() {
    
    const [user,setUser]=useContext(UserContext);
    const [userData,setUserData]=useState([]);
    const [data,setData]=useState([]);
    const [product,setProduct]=useState();
    
    useEffect(() => {
            fetch(`http://localhost:3060/order/${user}`)
                .then(response => response.json())
                .then(json => {
                    setUserData(json);
                    setProduct(json[0].savedCart);
                    const array=Object.keys(json[0].savedCart);
                    setUserData(array);
                })

            fetch('http://localhost:3060/')
                .then(response => response.json())
                .then(json => {
                    setData(json);
                })
    }, [])
    console.log(userData);
    console.log(data);
    console.log(product);

    // filter product & need to add count with that

    
    return (
        <div className="container">
            <h4 className="text-center text-danger mt-4">My Ordered Products</h4>
            <h5>{user}</h5>
            
        </div>
    )
}

// add user ordered product
