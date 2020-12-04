const express=require('express'); //express
const app=express(); // express --> app
const bodyParser = require('body-parser') // body parser
var cors = require('cors'); // cors
app.use(cors()); // cors --> app
app.use(bodyParser.json()) // body parser --> app
app.use(bodyParser.urlencoded({ extended: false })) // use body parser middleware for url encoded

// set password from mongodb cluster
const password="9augustbd";

// connection string code from -->connection method --> connect your application
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mydbuser:9augustbd@cluster0.eld9q.mongodb.net/crudDb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("crudDb").collection("crudCollection");
  // perform actions on the collection object

  const info={
      name:"Zahid",
      id:15101122
  }
//   insert one
  collection.insertOne(info)
  .then(res=>{console.log("Saved in DB")});


  console.log("DB Connected")
//   client.close();
});




// app get
app.get('/',(req,res)=>{
    res.send("Working");
})


// app listen
app.listen(3006,()=>{
	console.log("Listening to port over and over ");
})
