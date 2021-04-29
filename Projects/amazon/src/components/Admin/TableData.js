import React from 'react'

export default function TableData(props) {
    const {name,_id,time,savedCart}=props.data;
    console.log(savedCart);
    const itemCount=Object.values(savedCart);
    console.log(itemCount);
    var sum=0;
    for(var i=0;i<itemCount.length;i++){
        sum+=itemCount[i];
    }
    console.log(sum);

    const array= time.split("||");
    return (
        <>
                <tr>
                
                <td>{name}</td>
                <td>{sum}</td>
                <td>{array[0]}</td>
                <td><button className="btn btn-warning btn-sm no-shadow">View Detail</button></td>
                <td><button className="btn btn-danger btn-sm no-shadow">Remove</button></td>
                </tr>
        </>
    )
}
