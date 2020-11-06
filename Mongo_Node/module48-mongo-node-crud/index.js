const express=require('express');
const app=express();
const MongoClient = require('mongodb').MongoClient;


const uri = "mongodb+srv://demoUser:9augustbd@cluster0.rwjuz.mongodb.net/newDB?retryWrites=true&w=majority";


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("newDB").collection("testDB");
  collection.insertOne({name:"Zahid",id:420})
  .then(res=>{
      console.log("Added");
  })
});


app.get('/',(req,res)=>{
    res.send("Working");
})

app.listen(4200);