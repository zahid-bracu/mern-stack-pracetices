function middleWare(req,res,next){
    console.log("middle Ware function is used");
    next();
}

module.exports={middleWare};