import React, {useEffect} from 'react';
import { useState } from 'react';
import BookedRoomCard from './BookedRoomCard';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from './databaseManager';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link
  } from "react-router-dom";
import RoomsDB from './RoomsDB';
import { Button, Card } from 'react-bootstrap';
const BookedRoom = () => {
    const [rooms,setRooms]=useState([]);
    useEffect(() => {
        var db=getDatabaseCart();
        console.log(db)
        var keys=Object.keys(db);
        console.log(keys);

        const finalArr = RoomsDB.filter(pd =>
            keys.some(exclude => exclude == pd.key)
        );
        setRooms(finalArr);
      },[]);
      

      function remove(key){
        removeFromDatabaseCart(key);
        var db=getDatabaseCart();
        var keys=Object.keys(db);
        console.log(keys);

        const finalArr = RoomsDB.filter(pd =>
            keys.some(exclude => exclude == pd.key)
        );
        setRooms(finalArr);
      }
     const imgCheckOut="https://i.ibb.co/rdJpC74/check-out-stamp-red-rubber-stamp-white-background-check-out-stamp-sign-check-out-stamp-grunge-red-ch.jpg"


     console.log(rooms);

     var sum=0;
     for(var i=0;i<rooms.length;i++){
         sum+=rooms[i].price;
     }
     console.log(sum);
    return (
        <div className="container">
            <div className="row mt-5">
                <div className=" d-block mx-auto col-lg-9 order-lg-first order-md-last order-sm-last order-last ">
                    <div className="row justify-content-center align-items-center">
                        {
                            rooms.map(key => <BookedRoomCard remove={remove} data={key}></BookedRoomCard>)   
                        }
                    </div>
                </div>
                <div className="col-lg-3 order-sm-first">
                    <Card className="d-block mx-auto" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={imgCheckOut} />
                        <Card.Body>
                            <Card.Title>Payment Information</Card.Title>
                            <Card.Text>
                            <h5>Total Payment : {sum}$</h5>
                            </Card.Text>
                            
                            {
                                sum>0 && <Link to="/checkout">
                                <Button variant="primary">
                                    
                                    Check Out
                                   
                                </Button>
                                </Link>
                            }
                            
                            {
                                sum<=0 && <div>
                                    <h5>You didn't select any room</h5>
                                    <Link style={{textDecoration:"inherit",color:"black"}} to="/rooms">
                                    <button className="mx-auto d-block btn btn-warning ">Go back to Homepage</button>
                                    </Link>
                                </div>
                            }


                        </Card.Body>
                    </Card>
                </div>
            </div>
            
        </div>
    );
};

export default BookedRoom;