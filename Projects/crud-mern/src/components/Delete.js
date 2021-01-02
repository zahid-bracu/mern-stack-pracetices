import React, { useEffect, useState } from 'react';
import { useParams,useHistory,Link } from 'react-router-dom';
const Delete = () => {
    const [flag,setFlag]=useState(false);
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

    function remove(){
        setFlag(true);
    }

    return (
        <div>
            {
                !flag && <>
                <h4 className="text-center">Delete</h4>
                <div className="text-center">
                    <h4>Do you want to delete {info.name}</h4>
                    <h5>Number: {info.number}</h5>
                    

                    <div className=" mx-auto" style={{maxWidth:"500px", display:"flex", justifyContent:"space-around"}}>
                    <button className="btn btn-danger px-5" onClick={()=>deleteThis(id)}>Yes</button>
                    <button className="btn btn-success px-5" onClick={()=>remove()}>No</button> 
                    </div>
                </div>
                </>
            }



            {
                flag &&<> 
                <h5 className="text-center my-5">Contact is not deleted</h5>
                <div className="d-block mx-auto mt-5" style={{background:"none", maxWidth:"152.9px" }}>
                <div className="d-inline-block text-center">
                    
                        
                        <Link style={{textDecoration:"inherit"}} to="/contact">
                            <button className="btn btn-primary d-block my-2 mx-auto">Show All Contacts</button>
                        </Link>
                        <Link style={{textDecoration:"inherit"}} to="/form">
                            <button className="btn btn-secondary text-white my-2 d-block mx-auto">Add New Contact</button>
                        </Link>
                    
                    


                    <Link style={{textDecoration:"inherit"}} to="/home">
                        <button className="btn btn-success text-white my-2 px-4 d-block mx-auto">Back to Home</button>
                    </Link>

                </div>
            </div>
            </>
            }
        </div>
    );
};

export default Delete;