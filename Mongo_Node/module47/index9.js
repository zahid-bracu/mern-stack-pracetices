/*****  tutorial no. 9 ******/ 


const express=require('express'); //express
const app=express(); // express --> app
const bodyParser = require('body-parser') // body parser
var cors = require('cors'); // cors
app.use(cors()); // cors --> app
app.use(bodyParser.json()) // body parser --> app



// App Post
app.post('/addUser',(req,res)=>{
    console.log(req.body);
    var user=req.body;
    user.id=100;
    res.send(user);
})

// App Listen
app.listen(4005,()=>{
	console.log("Listening to port ");
})