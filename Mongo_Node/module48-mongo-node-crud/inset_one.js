const express=require('express'); //always yse
const app=express(); // always use
const MongoClient = require('mongodb').MongoClient; //db connection


const uri = "mongodb+srv://demoUser:9augustbd@cluster0.rwjuz.mongodb.net/newDB?retryWrites=true&w=majority"; //db connection


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); //db connection

client.connect(err => {
  const collection = client.db("newDB").collection("testDB"); //db connection
  
  // save data to db
  collection.insertOne({name:"Zahid",id:420})
  .then(res=>{
    // confirm message
      console.log("Added");
  })
});


app.get('/',(req,res)=>{
    res.send("Working");
})

app.listen(4200);