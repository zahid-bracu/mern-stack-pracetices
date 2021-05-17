import React, {useEffect, useState} from 'react'
import {

    useParams
  } from "react-router-dom";
import Item from './Item';
export default function  ViewDetails() {
    let { id } = useParams();
    const [data, setdata] = useState();
    const [item,setItem]=useState([]);
    const [allProducts,setAllProducts]=useState([]);

    useEffect(async () => {
        // Update the document title using the browser API
        await fetch(`http://localhost:3060/detailOrder/${id}`)
            .then(response => response.json())
            .then(json => {
                setdata(json);            
                setItem(json.savedCart);
            })


        
            fetch('http://localhost:3060/')
            .then(response => response.json())
            .then(json => {
                console.log(data);
                setAllProducts(json);
                
            })
      },[]);
    
    console.log(item);
    console.log(data);
    console.log(allProducts);
    return (
        <div>
            <h5 className="text-center">Order Details</h5>
            
            <p  className="text-center">{id}</p>
            {
             <Item item={item} allProducts={allProducts} />
            }
        </div>
    )
}
