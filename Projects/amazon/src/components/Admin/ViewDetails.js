import React, {useEffect, useState} from 'react'
import {

    useParams
  } from "react-router-dom";
import Item from './Item';
export default function  ViewDetails() {
    let { id } = useParams();
    const [data, setdata] = useState();
    const [item,setItem]=useState([]);

    useEffect(async () => {
        // Update the document title using the browser API
        await fetch(`http://localhost:3060/detailOrder/${id}`)
            .then(response => response.json())
            .then(json => {
                setdata(json);
                console.log(json.savedCart);
                setItem(json.savedCart);
            })
      },[]);
    
    
    return (
        <div>
            <h5 className="text-center">Order Details</h5>
            
            <p  className="text-center">{id}</p>
            <Item item={item} />
        </div>
    )
}
