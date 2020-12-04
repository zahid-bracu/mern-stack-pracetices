const express=require('express'); //express
const app=express(); // express --> app
const bodyParser = require('body-parser') // body parser
var cors = require('cors'); // cors
app.use(cors()); // cors --> app
app.use(bodyParser.json()) // body parser --> app


// set password from mongodb cluster
const password="9augustbd";

// connection string code from -->connection method --> connect your application
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mydbuser:9augustbd@cluster0.eld9q.mongodb.net/crudDb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true }); //edit the line
client.connect(err => {
  const collection = client.db("crudDb").collection("crudCollection");
  // perform actions on the collection object
  console.log("DB Connected")
  client.close();
});




// app get
app.get('/',(req,res)=>{
    res.send("Working");
})


// app listen
app.listen(3005,()=>{
	console.log("Listening to port over and over ");
})
