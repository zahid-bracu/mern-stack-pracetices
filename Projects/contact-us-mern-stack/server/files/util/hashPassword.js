const bcrypt=require('bcryptjs');
 

const securePassword= async (password)=>{
     
    const passwordHash= await bcrypt.hash(password,12);
    console.log(passwordHash);
    return passwordHash;
}


const checkPassword=async (password, passwordHash)=>{
    const passwordMatch= await bcrypt.compare(password,passwordHash);
    console.log(passwordMatch);
    return passwordMatch;
}


module.exports={securePassword,checkPassword};