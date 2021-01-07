
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

const uri = "mongodb+srv://demoUser:password@cluster0.rwjuz.mongodb.net/volunteer?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("volunteer").collection("volunteerCollection");
  console.log("DB Connected")
});


app.listen(3090,()=>{
	console.log("Listening to port at 6000 ");
})