const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => {
  res.send('Hello World!')
})



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mydbuser:9augustbd@cluster0.eld9q.mongodb.net/burjalarab?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("burjalarab").collection("bookings");
  console.log("Connected");
  client.close();
});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})