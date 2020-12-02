/*****  tutorial no. 8 ******/


const express=require('express'); //express
const app=express(); // express --> app
const bodyParser = require('body-parser') // body parser
var cors = require('cors'); // cors


app.use(cors()); // cors --> app

app.use(bodyParser.json()) // body parser --> app



// post
app.post('/addUser',(req,res)=>{
     
    console.log(req.body);
})

// link
app.listen(4900,()=>{
	console.log("Listening to port ");
})