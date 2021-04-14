const mongoose=require('mongoose');

const orderSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    business:{
        type:String
    },
    flat:{
        type:String
    },
    house:{
        type:String
    },
    road:{
        type:String
    },
    city:{
        type:String
    },
    phone:{
        type:Number,
        required:true
    },
    card:{
        type:Number,
        required:true
    },
    mail:{
        type:String,
        required:true
    },
    savedCart:{
        type:Array,
        required:true
    }
})


const orderList=mongoose.model('ORDER',orderSchema);

module.exports=orderList;