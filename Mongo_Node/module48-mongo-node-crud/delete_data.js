const express=require('express'); //always use 
const app=express(); // always use


//body parser
var bodyParser = require('body-parser'); //use for post data
app.use(bodyParser.urlencoded({ extended: false })) // use for post data
app.use(bodyParser.json()) // use for post data


//mongo connections
const { ObjectID } = require('mongodb'); // use to compare id in the db + connect mongo
const MongoClient = require('mongodb').MongoClient; //use for connect mongo
const uri = "mongodb+srv://demoUser:9augustbd@cluster0.rwjuz.mongodb.net/newDB?retryWrites=true&w=majority"; // use for connect mongo
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); // use for connect mongo


 
client.connect(err => {
  const collection = client.db("newDB").collection("testDB");

    //get data as to array
      app.get('/products',(req,res)=>{
        collection.find({})
        .toArray((err,document)=>{
            {
                res.send(document);
            }
        })
        })
  
    //post data as one item
      app.post('/addProduct',(req,res)=>{
          const product=req.body; // getting the form input
          console.log(product);
          
          //passing the form input in db
          collection.insertOne(product)
          .then(result=>{
          console.log("Added"); // checking the success
          res.send("Success");}) // this success msg will be shown in /addProduct page

      })


  //delete data
  app.delete('/delete/:id', (req,res)=>{
      console.log(req.params.id);
      collection.deleteOne({_id:ObjectID(req.params.id)})
      .then(result=>{
          console.log(result);
      })
  })

  
});


// setting page
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.listen(3002);