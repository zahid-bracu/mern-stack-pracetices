const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    img:{
        type:String
    },
    key:{
        type:String
    },
    name:{
        type:String
    },
    price:{
        type:String
    },
    seller:{
        type:String
    },
    stock:{
        type:Number,
        required:true
    }
})


const productList=mongoose.model('PRODUCT',productSchema);

module.exports=productList;