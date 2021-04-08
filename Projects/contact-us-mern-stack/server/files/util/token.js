const jwt =require('jsonwebtoken');

const createToken= async (value) =>{
    
    const token = await jwt.sign({value},process.env.key);
    return token;

}

module.exports={createToken};