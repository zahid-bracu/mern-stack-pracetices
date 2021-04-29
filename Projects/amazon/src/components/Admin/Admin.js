import React, {useEffect, useState} from 'react'
import TableData from './TableData';

function Admin() {

    const [data,setData]=useState([]);
    

    useEffect(() => {
        // Update the document title using the browser API
        fetch('http://localhost:3060/allOrders')
            .then(response => response.json())
            .then(json => setData(json))
      },[]);

      console.log(data);
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
                    data.map(key=> <TableData data={key}/>)
                }
                 
            </tbody>
            </table>
        </div>
        </>
    )
}
export default Admin;