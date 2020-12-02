/*****  tutorial no. 3 ******/


// Express
// Express --> App
const express=require('express');
const app=express();

// App Get Multiple Page
// page one
app.get('/',(req,res)=>{
	res.send("This is page one");
})


// page two
app.get('/two',(req,res)=>{
	res.send("This is page two");
})

// page three
app.get('/three',(req,res)=>{
	res.send("This is page three");
})


// App Listen : a port to open 
app.listen(3005,()=>{
	console.log("Listening to port ");
})
