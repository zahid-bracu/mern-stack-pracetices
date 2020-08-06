// Verify and double the number of an array using function
//function to double the value
function double(num){
    num=num*2;
    return num;
  }
  
  //function to take the array
  function checkAll(array){
    for(var i=0;i<array.length;i++){
      var num=array[i];
      //passing the array individual value
      num=double(num);
      console.log(num);
    }
  }
  
  //passing the array
  var array=[11,22,33,44,55,66];
  checkAll(array);
  

//  ---------------------------------------------------------------------------------------------



// Evenify a array values

// make the odd into even
function evenify(num){
    if(num%2==0){
      return num;
    }else{
      num*=2;
      return num;
    }
  }
  
  //taking the array value
  function evenify_all(array){
     var even_array=[];
     var num=null;
     var even=null;
     for(var i=0;i<array.length;i++){
       num=array[i];
       even=evenify(num);
       even_array.push(even);
     }
     return even_array;
  }
  
  var array=[3,7,5,8,11,32];
  
  //passing array and getting even array
  var result=evenify_all(array);
  console.log(result);
  

  //------------------------------------------------------------------------------------------------------------------------

  // Call back function

  //double function has been passed through para meter as task*
  function callBack(number,task){
    number=task(number);
    return number;
  }
  
  //the function that has been called
  function double(num){
    num*=2;
    return num;
  }
  
  //passing the value and a function
  var result=callBack(10,double);
  console.log(result);
  
// ------------------------------------------------------------------------------------

//sum function with arguments
function sum(){
  var sum=0;
  for(var i=0;i<arguments.length;i++){
    sum+=arguments[i];
  }
  return sum;
}

var result=sum(11,22,33,44,21,23,57);
console.log(result);


// -----------------------------------------------------------
// Array Mapping With Three Arguments*****
var array=[11,22,33,44,55,66];
var newArray=array.map(function(num,index,array){
  return num;
})

console.log(newArray);

// ----------------------------------------------------------
//Array Map with Arrow Function*****
var array=[11,22,33,44,55,66];
var newArray=array.map((num)=>{
  return num;
})

console.log(newArray);

// ------------------------------------------------------------
// Array Mapping from JSON Data 
var array=[
  {
    id:0,
    brand:'pepsi',
    year:'1914'
  },
  {
    id:1,
    brand:'Coke',
    year:'1914'
  }
]

var newArray=array.map((item)=>{
  return item.brand;
})

console.log(newArray);
// ---------------------------------------------------------------------
// Arrow Function
var value = (x,y=10) =>{
  return x*y;
}
console.log(value(8));