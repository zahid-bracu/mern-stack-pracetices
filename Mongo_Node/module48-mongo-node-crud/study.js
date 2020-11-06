const express=require('express');
const MongoClient = require('mongodb').MongoClient;
const app=express();

 
const uri = "mongodb+srv://demoUser:9augustbd@cluster0.rwjuz.mongodb.net/demodb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const password="9augustbd";

app.get('/',(req,res)=>{
    res.send("I am working");
});


client.connect(err => {
  const collection = client.db("demodb").collection("infodb");
  console.log("DB - connected")
  // perform actions on the collection object
  client.close();
});


app.listen(3050);