import React, { useState,useContext } from 'react';
import { Form } from 'react-bootstrap';
import {
    Link,
    useHistory,
    useParams 
  } from "react-router-dom";
import {UserContext} from '../App';
 


const Update = () => {
    const [user,setUser]=useContext(UserContext);
    const userMail=user.mail;
    const {id}=useParams();
    // console.log(id);
    // console.log(userMail);

    const [info,setInfo]=useState([]);

    fetch(`http://localhost:3070/single/${id}`)
            .then(res=>res.json())
            .then(data=>{
                //console.log(data);
                setInfo(data);
            }).catch((error) =>{
                console.error(error);
              })


    let history = useHistory();
    function saveData(event){
        console.log("Ok");
        event.preventDefault();
         
        

        var name=(document.getElementById('name').value=="") ? info.name : document.getElementById('name').value;
        var number=(document.getElementById('number').value=="") ? info.number : document.getElementById('number').value;
        var mail=(document.getElementById('mail').value=="") ? info.mail : document.getElementById('mail').value;
        var address=(document.getElementById('address').value=="") ? info.address : document.getElementById('address').value;

 /*       var number=document.getElementById('number').value;
        var mail=document.getElementById('email').value;
        var address=document.getElementById('address').value; */

        //console.log(name+" : "+number+" : "+mail+" : "+address);
        var information={
            "name":name,
            "number":number,
            "mail":mail,
            "address":address,
            "userMail":userMail
        }

        console.log(information)

        
        fetch(`http://localhost:3070/update/${id}`,{
            method:'PATCH',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(information)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("Update");
            history.push("/updatemsg");
        })
        // setData(information);
        // console.log(data)
        // fetch('http://localhost:3070/addInfo',{
        //        method:'POST',
        //        headers:{'Content-Type': 'application/json'},
        //        body:JSON.stringify(information)
        //    }).then(res=>res.json())
        //    .then(data=>{
        //        if(data){
        //         history.push("/saved");
        //        }
        //    })
    }
    return (
        <div className="container">
            <h5 className="text-center">Update</h5>
            <Form onSubmit={saveData} style={{maxWidth:"400px"}} className="d-block mx-auto">
                <Form.Group controlId="name">
                    <Form.Label>Contact Name : </Form.Label>
                    <Form.Control type="name" placeholder={info.name}   id="name"  />
                </Form.Group>

                <Form.Group controlId="number">
                    <Form.Label>Contact Number: </Form.Label>
                    <Form.Control type="number"   id="number" placeholder={info.number} />
                </Form.Group>

                <Form.Group controlId="mail">
                    <Form.Label>Contact Email: </Form.Label>
                    <Form.Control type="email"   id="mail" placeholder={info.mail} />
                </Form.Group>
             
            
                <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control   placeholder={info.address} as="textarea" id="address" rows={4} />
                </Form.Group>
                <button className="btn btn-primary">Save</button>
            </Form>

            <div className="d-block mx-auto" style={{background:"none", maxWidth:"152.9px" }}>
                <div className="d-inline-block text-center">
                    
                    <Link style={{textDecoration:"inherit"}} to="/contact">
                        <button className="btn btn-primary d-block my-2 mx-auto">Show All Contacts</button>
                    </Link>
                    
                    
                    <Link style={{textDecoration:"inherit"}} to="/home">
                        <button className="btn btn-secondary text-white my-2 px-4 d-block mx-auto">Back to Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Update;