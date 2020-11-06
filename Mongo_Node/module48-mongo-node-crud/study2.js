const express=require('express');
const app=express();
const MongoClient = require('mongodb').MongoClient;

const password="9augustbd"

const uri = "mongodb+srv://demoUser:9augustbd@cluster0.rwjuz.mongodb.net/demodb2?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("demodb2").collection("infodb2");
  // perform actions on the collection object
  console.log("Db 2 worked");
  collection.insertOne({name:"Zahid",id:420}).then(
    result=>{
      console.log("PD added")
    }
  )
});



app.get('/',(req,res)=>{
    res.send("Message");
})


app.listen(3060);