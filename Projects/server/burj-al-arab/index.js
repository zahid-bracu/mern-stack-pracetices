const express=require('express'); //express
const app=express(); // express --> app
const bodyParser = require('body-parser') // body parser
var cors = require('cors'); // cors
app.use(cors()); // cors --> app
app.use(bodyParser.json()) // body parser --> app
app.use(bodyParser.urlencoded({ extended: false })) // use body parser middleware for url encoded
const ObjectId=require('mongodb').ObjectID // object id is needed to match data in database
// set password from mongodb cluster
const port = 9000





const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mydbuser:9augustbd@cluster0.eld9q.mongodb.net/burjalarab?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("burjalarab").collection("bookings");
  console.log("Connected");
  
  app.post('/addBooking',(req,res)=>{
    const booking=req.body;
     
    res.send("Worked bro")
    collection.insertOne(booking)
    .then(result=>{
      console.log("worked")
    })
  })


  app.get('/showBooking',(req,res)=>{
    collection.find({email:req.query.email}) //find all data from database
    .toArray((err,document)=>{ // to array is being used to load all data from db
      res.send(document) //data send to html
    })
  })

});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})