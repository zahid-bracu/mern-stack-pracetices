const express = require('express');
const router=express.Router();
const {middleware}=require('../middleware/middleware');
const orderList =require('../schema/order');
const productList=require('../schema/product');



router.get('/', async (req, res, next) => {
    try{
        const allData= await productList.find();
        res.status(200).json(allData)
    }catch(err){
        res.status(202).json({message:err})
    }
    
  })


  router.post('/addProducts',middleware,async (req, res, next) => {
    console.log(req.body);
    var {category,img,key,name,price,seller,stock}=   req.body;
    if(!category  || !img || !key || !name|| !price || !seller ||  !stock){
        res.status(400).json({error:"Please fill up the form correctly"});
      }else{
        const similar=await productList.find({key:key})
        console.log(similar.length)
        if(similar.length>0){
            res.status(201).json({error:"similar product is been saved"})
        }else{
            try{
                const product = new productList({category,img,key,name,price,seller,stock});
                console.log(product._id);
                const response= await product.save();
                res.status(200).send(response);
            }catch(err){
                res.status(400).send(err);
            }
        }
        
      }
    
  })
//   order products
router.post('/orderProducts', (req, res) => {
    console.log(req.body)
    res.json({
        status:"success"
    })
  })




module.exports=router;