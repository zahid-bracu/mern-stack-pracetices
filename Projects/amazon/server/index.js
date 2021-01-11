
const express=require('express'); //express
const app=express(); // express --> app
const bodyParser = require('body-parser') // body parser
var cors = require('cors'); // cors
app.use(cors()); // cors --> app
app.use(bodyParser.json()) // body parser --> app
app.use(bodyParser.urlencoded({ extended: false })) // use body parser middleware for url encoded
const ObjectId=require('mongodb').ObjectID;

const password="9augustbd";



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://demoUser:password@cluster0.rwjuz.mongodb.net/amazon?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true  });
client.connect(err => {
  const collection = client.db("amazon").collection("amazon-list");
  
  app.post('/addCart',(req,res)=>{
    const pd=req.body;
    console.log(pd);
    // collection.insertOne(pd)
    // .then(result=>{
    //   console.log("Data saved");
    //   res.redirect('/') // stopping it to go other page
    // })
  })


  console.log("DB Connected 3005")
});



app.listen(3005,()=>{
	console.log("Listening to port at 3005 ");
})