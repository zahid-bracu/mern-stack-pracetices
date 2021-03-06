/*  tutorial six : update single data from db using html  */

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
  res.sendFile(__dirname+'/index7.html');
})



// connection string code from -->connection method --> connect your application
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mydbuser:9augustbd@cluster0.eld9q.mongodb.net/crudDb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true }); //unified topology set
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


  // update
  app.patch('/update/:id',(req,res)=>{
    console.log(req.body)

    collection.updateOne({_id:ObjectId(req.params.id)},
    {
      $set:{
        name: req.body.name,
        mail: req.body.mail
      }
    })
    .then(result=>{
      res.send(result);
      console.log(result);
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


  // load single data
  app.get('/product/:id',(req,res)=>{
    console.log(req.params.id); 
    collection.find({_id:ObjectId(req.params.id)})
    .toArray((err,documents)=>{
      res.send(documents[0])
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
app.listen(4010,()=>{
	console.log("Listening to port over and over ");
})
