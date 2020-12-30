import React, { useState, useEffect, useContext } from 'react';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from './databaseManager';
import Database from './Database';
import { Button, Card } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";
  import './style.css';
  import {DateContext} from '../App';
  import {UserContext} from '../App';
import SelectedRoom from './SelectedRoom';


const Booking = (props) => {

    const [dates,selectDates]= useContext(DateContext);
    const [user,setUser]=useContext(UserContext);
    const [flag,setFlag]=useState(false);
    const [data,setData]=useState();
    const [db,setDb]=useState(Database);
     
     
    
    
        useEffect(async () => {
            window.scrollTo(0,0);
            var temp=getDatabaseCart();
            var keys=Object.keys(temp)
            console.log(keys)
        
             

            const finalArr = Database.filter(pd =>
                keys.some(exclude => exclude == pd.key)
            );
            setDb(finalArr);

        },[]);


        function remove(id){
            removeFromDatabaseCart(id);
            var temp=getDatabaseCart();
            var keys=Object.keys(temp)
            console.log(keys)
        
             

            const finalArr = Database.filter(pd =>
                keys.some(exclude => exclude == pd.key)
            );
            setDb(finalArr);
          }



        // 
        useEffect(() => {
            fetch('http://localhost:9000/showBooking?email='+user.email)
                    .then(response => response.json()) //all datas are got
                    .then(json => {load(json)})
        },[])

        function load(data){
            console.log(data);
        }

      


        var length=db.length;
        var sum=null;
        for(var i=0;i<db.length;i++){
            sum+=db[i].price;
        }
       


        const savedData = { ...user, ...dates };
        console.log(savedData);

        const imgUrl="https://i.ibb.co/gVfB0nX/book-now-red-stamp-text-white-47585028.jpg";



    let history = useHistory();
    function checkOut(){
        // console.log("Order Processing");
        processOrder();
        console.log("Worked")
        
       console.log(savedData);

       
       if(user.state){
           console.log("In")

           fetch('http://localhost:9000/addBooking',{
               method:'POST',
               headers:{'Content-Type': 'application/json'},
               body:JSON.stringify(savedData)
           }).then(res=>res.json())
           .then(data=>{
               console.log(data);
           })
           history.push("/payment");
       }else{
           console.log("Out")
       }
    }




    

    return (
        <div className="container">

            <div className="row">
            <div style={{display:"flex",flexWrap:"wrap"}} className="col-lg-9">
            {
                db.map(key => <SelectedRoom remove={remove} data={key}></SelectedRoom>)
            }
            </div>

            <div className="col-lg-3 order-lg-last order-md-first order-sm-first order-first">
                <Card className="d-block" style={{ maxWidth: '300px' }}>
                <Card.Img variant="top" src={imgUrl} />
                <Card.Body>
                
                    
                    {
                        sum && 
                        <>
                        <Card.Text className="text-center">
                            Total Room Selected : {length}
                        </Card.Text>
                        <Card.Title className="text-center"> Total Amount : {sum}$</Card.Title>
                        <Button onClick={checkOut} variant="danger" className="d-block mx-auto px-5">
                            {/* <Link to="/payment"> */}
                                <span className="text-book" >Book</span>
                            {/* </Link> */}
                        </Button>
                        </>
                    }
                    {
                        !sum && <h6 className="text-center text-danger">You didn't select any rooms</h6>
                    }
                    
                        
                    
                    
                </Card.Body>
                </Card>
            </div>
            </div>
        </div>
    );
};

export default Booking;