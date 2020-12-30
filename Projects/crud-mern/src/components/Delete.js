import React, { useEffect, useState } from 'react';
import { useParams,useHistory } from 'react-router-dom';
const Delete = () => {
    const {id}=useParams();
    const [info,setInfo]=useState([]);
    let history = useHistory();
    // console.log(id);
    
        
            fetch(`http://localhost:3070/single/${id}`)
            .then(res=>res.json())
            .then(data=>{
                //console.log(data);
                setInfo(data);
            }).catch((error) =>{
                console.error(error);
              })
            // console.log(info);


            function deleteThis(id){
                console.log(id);

                fetch(`http://localhost:3070/delete/${id}`,{
                        method: 'DELETE'
                    }) 
                    .then(res=>res.json())
                    .then(res=>{
                        console.log(res);
                        if(res){
                            history.push("/deletemsg");
                        }
                        
                    })
            }


    return (
        <div>
            <h4 className="text-center">Delete</h4>
            <div className="text-center">
                <h4>Do you want to delete {info.name}</h4>
                <h5>Number: {info.number}</h5>
                

                <div className=" mx-auto" style={{maxWidth:"500px", display:"flex", justifyContent:"space-around"}}>
                <button className="btn btn-danger px-5" onClick={()=>deleteThis(id)}>Yes</button>
                <button className="btn btn-success px-5">No</button> 
                </div>
            </div>
        </div>
    );
};

export default Delete;