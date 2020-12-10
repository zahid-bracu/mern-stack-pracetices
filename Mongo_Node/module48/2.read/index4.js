/*  tutorial four : load data from db into html  */


const express=require('express'); //express
const app=express(); // express --> app
const bodyParser = require('body-parser') // body parser
var cors = require('cors'); // cors
app.use(cors()); // cors --> app
app.use(bodyParser.json()) // body parser --> app
app.use(bodyParser.urlencoded({ extended: false })) // use body parser middleware for url encoded
const ObjectId=require('mongodb').ObjectID

// set password from mongodb cluster
const password="9augustbd";

// app get
app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/index4.html');
})



// connection string code from -->connection method --> connect your application
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mydbuser:9augustbd@cluster0.eld9q.mongodb.net/crudDb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("crudDb").collection("crudCollection");
  // perform actions on the collection object

  // loading data
  app.get('/info',(req,res)=>{
    collection.find({})
    .toArray((err,document)=>{
      res.send(document)
    })
  })


  // sending data to database
  app.post('/addUser',(req,res)=>{
    const pd=req.body;
    console.log(pd);
    collection.insertOne(pd)
    .then(result=>{
      console.log("Data saved");
      res.send("Success")
    })
  })


  console.log("DB Connected")
//   client.close();
});

// app listen
app.listen(4106,()=>{
	console.log("Listening to port over and over ");
})
