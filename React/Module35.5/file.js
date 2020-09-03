// Map Reduce Example Two
var array=[10,20,30,40,50,60,150];
var total=array.reduce(
  (sum,key)=>{
    key*=2;
    sum+=key;
    console.log(key+", "+sum)
    return sum;
  },0
)

console.log(total);


// Map Reduce Example One
var objectArray=[
    {
      name:"KisLu",
      number:420
    },
    {
      name:"BajLu",
      number:421
    },
    {
      name:"ShibLu",
      number:422
    },
    {
      name:"KisLu",
      number:423
    }
  ]
  
  
  var total=objectArray.reduce((sum,key)=>{
    console.log(sum+":"+key.number);
    sum+=key.number;
    return sum;
  },0);
  
  console.log(total);