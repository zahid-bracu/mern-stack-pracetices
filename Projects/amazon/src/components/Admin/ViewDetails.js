import React, {useEffect, useState} from 'react'
import {

    useParams
  } from "react-router-dom";
import CustomerInfo from './CustomerInfo';
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
             
                setAllProducts(json);
                
            })
      },[]);
    
     console.log(data);
    return (
        <div>
            <hr/>
            <h4 className="text-center text-danger">Shipping Address</h4>
            <hr/>
            {
                data && <CustomerInfo orderId={id} customer={data}/>
            }
             
            {
             <Item item={item} allProducts={allProducts} />
            }
        </div>
    )
}
