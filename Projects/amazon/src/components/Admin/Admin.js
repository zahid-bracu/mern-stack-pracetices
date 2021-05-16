import React, {useEffect, useState} from 'react'
import TableData from './TableData';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";
function Admin() {

    const [data,setData]=useState([]);
    

    useEffect(() => {
        // Update the document title using the browser API
        fetch('http://localhost:3060/allOrders')
            .then(response => response.json())
            .then(json => setData(json))
      },[]);


      function removeData(id){
        var message={
            id:id
        }  
        console.log(message);
        fetch('http://localhost:3060/deleteOrder',{
            method:"DELETE",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(message)
        }).then(res=>res.json)
        .then(msg=>{
            console.log("Data has been deleted")
            var tempData=data.filter(key=> key._id!=id);
            setData(tempData);
        })
      }
      
      let history = useHistory();
      function ViewDetail(id){
        history.push(`/viewDetails/${id}`);
      }
    return (
        <>
        <h2 className="text-center mt-2 mb-4 text-info">Customer's Orders</h2>
        <div className="container">
            <table className="table-striped table-dark table">
            <thead  class="bg-info text-white">
                <tr>
                 
                <th scope="col">Name</th>
                <th scope="col">Items</th>
                <th scope="col">Date</th>
                <th scope="col">Detail</th>
                <th scope="col">
                    Action
                </th>
                </tr>
            </thead>
            <tbody >
                {
                    data.map(key=> <TableData ViewDetail={ViewDetail} removeData={removeData} data={key}/>)
                }
                 
            </tbody>
            </table>
        </div>
        </>
    )
}
export default Admin;