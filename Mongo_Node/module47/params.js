const express=require('express');
const app=express();

app.get('/:id',(req,res)=>{
    res.send(req.params.id);
    console.log(req.params.id)
})

app.listen(4200,()=>{
	console.log("Listening to port ");
})
