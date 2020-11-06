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
        start:"",
        end:""
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
            var info={
                start:e.target.value
            }
            setDate(info);
          }
          if(e.target.name=="dateTwo"){
            console.log("End Date : "+e.target.value);
            var info={
                end:e.target.value
            }
            setDate(info);
          }
           

      }
      console.log(date);

      let history = useHistory();

      function goRooms(key,name){
         
        history.push(`/rooms/${name}`);
      }
    
    return (
        <div className="row justify-content-center align-items-center">
            <div className="col-7 text-center">
                <img src={dis[0].photo} style={{maxWidth:"120px"}} />
                <h2>{dis[0].name}</h2>
                    <p style={{maxWidth:"360px"}} className="d-block text-justify mx-auto">{dis[0].description}</p>
            </div>
            <div className="col-5">
            <Form style={{maxWidth:"300px"}}>
                
                <Form.Group controlId="formOrigin">
                    <Form.Label>Origin</Form.Label>
                    <Form.Control type="text" value="Dhaka" disabled="disabled" />
                </Form.Group>

                <Form.Group controlId="formDestination">
                    <Form.Label>Destination</Form.Label>
                    <Form.Control type="text" value={dis[0].name} disabled="disabled" />
                </Form.Group>

                <Form.Group controlId="fromDate">
                    <Form.Label>From</Form.Label>
                    <Form.Control type="date" name="dateOne" onBlur={dateValue}  />
                </Form.Group>

                <Form.Group controlId="toDate">
                    <Form.Label>To</Form.Label>
                    <Form.Control type="date" name="dateTwo" onBlur={dateValue}  />
                </Form.Group>

                 
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" onClick={()=>goRooms(dis[0].key,dis[0].name)}  type="submit">
                    Submit
                </Button>

            </Form>
            </div>
        </div>
    );
};

export default FormPage;