const express=require('express');
const app=express();



app.get('/:id',(req,res)=>{
    var value=req.params.id;
    var word=req.query.sort;
    res.send({value,word});
})

app.listen(3008,()=>{
	console.log("Listening to port ");
})
