const express=require('express');
const app=express();
const MongoClient = require('mongodb').MongoClient;


const uri = "mongodb+srv://demoUser:9augustbd@cluster0.rwjuz.mongodb.net/<dbname>?retryWrites=true&w=majority";


const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.get('/',(req,res)=>{
    res.send("Working");
})

app.listen(4200);