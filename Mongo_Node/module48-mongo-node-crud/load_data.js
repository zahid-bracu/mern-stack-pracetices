const express=require('express'); //always use 
const app=express(); // always use


var bodyParser = require('body-parser') //use for post data
app.use(bodyParser.urlencoded({ extended: false })) // use for post data
app.use(bodyParser.json()) // use for post data


const MongoClient = require('mongodb').MongoClient; //use for connect mongo
const uri = "mongodb+srv://demoUser:9augustbd@cluster0.rwjuz.mongodb.net/newDB?retryWrites=true&w=majority"; // use for connect mongo
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); // use for connect mongo


// below code for post and get data
client.connect(err => {
  const collection = client.db("newDB").collection("testDB");

  app.get('/products',(req,res)=>{
    collection.find({})
    .toArray((err,document)=>{
        {
            res.send(document);
        }
    })
    })
  
//  moving to add product page
  app.post('/addProduct',(req,res)=>{
      const product=req.body; // getting the form input
      console.log(product);
      
      //passing the form input in db
      collection.insertOne(product)
      .then(result=>{
      console.log("Added"); // checking the success
      res.send("Success");}) // this page will show in /addProduct page

  })

  
});


// setting page
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.listen(3000);