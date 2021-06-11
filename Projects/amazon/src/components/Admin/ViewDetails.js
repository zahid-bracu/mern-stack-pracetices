import React, {useEffect, useState} from 'react'
import {

    useParams
  } from "react-router-dom";
import CustomerInfo from './CustomerInfo';
import Item from './Item';
import './style.css';
import { useHistory } from "react-router-dom";
export default function  ViewDetails() {
    let { id } = useParams();
    const [data, setdata] = useState();
    const [item,setItem]=useState([]);
    const [allProducts,setAllProducts]=useState([]);

    let history = useHistory();

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
        <div className="main-part">
        <div>
          
            <h4 className="text-center text-danger mt-3">Shipping Address</h4>
            <hr/>
            {
                data && <CustomerInfo orderId={id} customer={data}/>
            }
             
            {
             <Item item={item} allProducts={allProducts} />
            }
        </div>
        <button onClick={()=>history.push("/admin")} className='btn btn-danger px-5 middle'>Back</button>
        </div>
    )
}
