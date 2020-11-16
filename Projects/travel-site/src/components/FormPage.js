import React, {useState, useEffect} from 'react';
import { Button,Form } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useHistory
  } from "react-router-dom";
import Database from './Database';

const FormPage = () => {

    const [date,setDate]=useState({
        dateOne:null,
        dateTwo:null
    })

    const {key}=useParams();
    console.log(key);
    const [db,setDb]=useState(Database);
    const [dis,setDis]=useState([{
        name:"",
        description:"",
        photo:"",
        key:null
    }]);
    useEffect(() => {
        const items=db.filter(id=> id.key==key);
        setDis(items);
      },[]);
      console.log(dis);

      function dateValue(e){
          let value=false;
          if(e.target.name=="dateOne"){
            console.log("Start Date : "+e.target.value);
            var info={...date};
            info[e.target.name]=e.target.value;
            setDate(info);
          }
          if(e.target.name=="dateTwo"){
            console.log("End Date : "+e.target.value);
            var info={...date};
            info[e.target.name]=e.target.value;
            setDate(info);
          }
      }
      console.log(date);

      

      let history = useHistory();

      function submitInfo(e){
        if(date.dateOne!=null && date.dateTwo!=null){
        }else{
            e.preventDefault();
            document.getElementById('msg').innerText="Please select starting and ending date";
        }
      }

      function goRooms(key,name,e){
        if(date.dateOne!=null && date.dateTwo!=null){
            console.log("Not Null");
            history.push(`/rooms/${name}`);
            document.getElementById('msg').innerText="";
            
        }else{
            console.log("Null");
            // document.getElementById('msg').innerText="Please select starting and ending date";
            
        }
         
        
      }
    
    return (
        <div className="row justify-content-center align-items-center">
            <div className="col-lg-7 col-md-12 col-sm-12 col-12 text-center">
                <img src={dis[0].photo} style={{maxWidth:"120px"}} />
                <h2 style={{textDecoration:"inherit",color:"white"}}>{dis[0].name}</h2>
                    <p style={{maxWidth:"360px",color:"white"}} className="d-block text-justify mx-auto">{dis[0].description}</p>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
            <Form style={{color:"white"}} onSubmit={submitInfo}  style={{maxWidth:"300px"}} className="d-block mx-auto">
                
                <Form.Group controlId="formOrigin">
                    <Form.Label className="font-weight-bold" style={{color:"white"}}>Origin</Form.Label>
                    <Form.Control type="text" value="Dhaka" disabled="disabled" />
                </Form.Group>

                <Form.Group controlId="formDestination">
                    <Form.Label className="font-weight-bold" style={{color:"white"}}>Destination</Form.Label>
                    <Form.Control type="text" value={dis[0].name} disabled="disabled" />
                </Form.Group>

                <Form.Group controlId="fromDate">
                    <Form.Label className="font-weight-bold" style={{color:"white"}}>From</Form.Label>
                    <Form.Control type="date" name="dateOne" onBlur={dateValue}  />
                </Form.Group>

                <Form.Group controlId="toDate">
                    <Form.Label className="font-weight-bold" style={{color:"white"}}>To</Form.Label>
                    <Form.Control type="date" name="dateTwo" onBlur={dateValue}  />
                </Form.Group>

                 
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check style={{color:"white"}} type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" onClick={()=>goRooms(dis[0].key,dis[0].name)} type="submit">
                    Submit
                </Button> 

                <Link className="text-white ml-2" to="/home">
                <Button variant="danger">
                Back to Homepage  
                </Button></Link>
                
                
                
                <p id="msg" className="text-danger text-center my-3 font-weight-bold"></p>
            </Form>
            </div>
        </div>
    );
};

export default FormPage;