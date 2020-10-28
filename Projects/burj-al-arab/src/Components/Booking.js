import React, { useState, useEffect } from 'react';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from './databaseManager';
import Database from './Database';
import { Button, Card } from 'react-bootstrap';


const Booking = () => {
    const [data,setData]=useState();
    const [db,setDb]=useState(Database);
    console.log(db);
    
    
    useEffect(async () => {
        var temp=getDatabaseCart();
        var keys=Object.keys(temp)


        const finalArr = Database.filter(pd =>
            keys.some(exclude => exclude == pd.key)
        );
        setDb(finalArr);
                 
      },[]);
      console.log(db);
      var length=db.length;
      console.log(length);

      var sum=0;
      for(var i=0;i<db.length;i++){
          sum+=db[i].price;
      }
      console.log(sum);


    const imgUrl="https://i.ibb.co/gVfB0nX/book-now-red-stamp-text-white-47585028.jpg";

    return (
        <div className="container">
            <Card className="d-block mx-auto" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={imgUrl} />
            <Card.Body>
            <Card.Text className="text-center">
            Total Room Selected : {length}
                </Card.Text>
            <Card.Title className="text-center"> Total Amount : {sum}$</Card.Title>
                
                <Button variant="danger" className="d-block mx-auto px-5">Book</Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Booking;