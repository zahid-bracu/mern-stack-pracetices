const express=require('express');
var cors = require('cors')
const app=express();
app.use(cors())

const array=["Abrar","Salim","Jobbar","Kalam","Yousha","No one"];

app.get('/:id',(req,res)=>{
    
    var value=req.params.id;
    var name =array[value];
    res.send({value,name});
})

app.listen(4200,()=>{
	console.log("Listening to port ");
})
