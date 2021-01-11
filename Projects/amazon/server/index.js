const express=require('express'); //express
const app=express(); // express --> app
const bodyParser = require('body-parser') // body parser
var cors = require('cors'); // cors
app.use(cors()); // cors --> app
app.use(bodyParser.json()) // body parser --> app
app.use(bodyParser.urlencoded({ extended: false })) // use body parser middleware for url encoded
const ObjectId=require('mongodb').ObjectID // object id is needed to match data in database
// set password from mongodb cluster
const password="9augustbd";


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://demoUser:9augustbd@cluster0.rwjuz.mongodb.net/amazon?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("amazon").collection("amazon-list");
  
  //load all data
  app.get('/info',(req,res)=>{
    collection.find({}) //find all data from database
    .toArray((err,document)=>{ // to array is being used to load all data from db
      res.send(document) //data send to html
    })
  })

  // post bulk of data
  app.post('/addProducts',(req,res)=>{
    const pd=req.body;
    console.log(pd);
    collection.insertMany(pd)
    .then(result=>{
      console.log("Data saved");
      // res.redirect('/') // stopping it to go other page
    })
  })


  console.log("connected")
});


// app listen
app.listen(3010,()=>{
	console.log("Listening to port at 3010 ");
})