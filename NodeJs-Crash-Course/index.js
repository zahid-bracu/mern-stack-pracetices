// object passing using require function
const person=require('./person');


// class passing using require function
const information=require('./information');

//  person class inside object access
console.log(person.name)

//information class access
const info=new information("zahid","15101122")
console.log(info);

//calling method
info.message()


console.log("Working again")