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
const uri = "mongodb+srv://demoUser:9augustbd@cluster0.rwjuz.mongodb.net/addressbook?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("addressbook").collection("address");
  
  app.post('/addInfo',(req,res)=>{
    const pd=req.body;
    console.log(pd);
    collection.insertOne(pd)
    .then(result=>{
      console.log("Data saved");
      res.send(true) // stopping it to go other page
    })
  })


  app.get('/info',(req,res)=>{
    
    collection.find({userMail: req.query.userMail}) //find all data from database
    .toArray((err,document)=>{ // to array is being used to load all data from db
      res.send(document) //data send to html
    })
  })



  app.get('/single/:id',(req,res)=>{
    // console.log(req.params.id); 
    collection.find({_id:ObjectId(req.params.id)})
    .toArray((err,documents)=>{
      res.send(documents[0])
    })
  })


  // delete
  app.delete('/delete/:id',(req,res)=>{
    console.log(req.params.id);
    collection.deleteOne({_id: ObjectId(req.params.id)}) //delete one & object id
    .then((result)=>{
      console.log(result.deletedCount)
      res.send(result.deletedCount>0);
    })
  })


  // update
  app.patch('/update/:id',(req,res)=>{
    console.log(req.body)

    collection.updateOne({_id:ObjectId(req.params.id)}, //update data using update one & ObjectId for matching
    {
      $set:{
        name: req.body.name,
        number:req.body.number,
        mail: req.body.mail,
        address:req.body.address
      }
    })
    .then(result=>{
      res.send(result);
      console.log(result);
      // result is to say that data is updated
    })

  })

  


  console.log("db-connected")
});







app.listen(3070,()=>{
	console.log("Listening to port at 6000 ");
})
