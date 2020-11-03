const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    const info={
        name:"Zahid",
        id:420
    }
	res.send(info);
})

app.listen(3006,()=>{
	console.log("Listening to port ");
})
