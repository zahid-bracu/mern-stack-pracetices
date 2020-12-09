/*  tutorial five : delete data from bd using html  */

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
  res.sendFile(__dirname+'/index5.html');
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


  // deleting data
  app.delete('/delete/:id',(req,res)=>{
    console.log(req.params.id);
    collection.deleteOne({_id: ObjectId(req.params.id)}) //delete one & object id
    .then((result)=>{
      console.log(result)
    })
  })

  console.log("DB Connected")
//   client.close();
});

// app listen
app.listen(5006,()=>{
	console.log("Listening to port over and over ");
})
