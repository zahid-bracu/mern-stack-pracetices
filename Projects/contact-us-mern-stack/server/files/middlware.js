// middleware
const middleware = (req,res,next)=>{
    console.log("Hello From The Middleware");
    next();
}
module.exports={middleware};