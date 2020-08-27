// ---------------- zero value in if else ------------------
// True
var value=-4;
if(value){
  console.log("true");
}else{
  console.log("false");
}

// False
var value=0;
if(value){
  console.log("true");
}else{
  console.log("false");
}

//---------------String existance Checking------------------
// Using length
var str="Spooky";
if(str.length>0){
  console.log("String Existed");
}else{
  console.log("String not existed");
}

// Using value
var value="";
if(value){
  console.log("String Existed");
}else{
  console.log("No String");
}


// -------------------String length check------------------------
var value="";
if(value.length>0){
  console.log("String Existed");
}else{
  console.log("No String");
}

//--------------False result : -----------------------------------
false
0
""
null
NaN
undefined

//--------------True Result -----------------------------
var array={};
var object=[];

// ------------------Null Vs. Undefined--------------------


//-----------------------------  Double Equal----------------------------

var x=10;
var y='10';
if(x==y){
  console.log("Matched");
}else{
  console.log("Not Matched");
}


//---------------------------- Triple Equal ------------------------------

var x=10;
var y='10';
if(x===y){
  console.log("Matched");
}else{
  console.log("Not Matched");
}


//----------------------Map-----------------------------------------
var array=[11,22,33,44,55];

var newArray= array.map(function argue(elem,index){
  return elem**2;
});

console.log(newArray);

// ----------------------filter-----------------------------------
var array=[11,22,33,44,55];

var newArray= array.filter(function check(x){
  return x>30;
})

console.log(newArray);

// ------------------------Array Map : Short -------------------------
var array = [10,20,30,40,50];
var newArray=array.map(x=> x*10);
console.log(newArray);

// ------------------------Array Filter : Short -------------------------
var array = [10,11,12,13,14,15,16,17,18,19,20]
var newArray=array.filter(x=> x>15);
console.log(newArray);


// ---------------------------Array Map : from Object -----------------------
var object=[
    {
      name:"Zahid",
      id: "19241051",
      campus: "bracu"
    },
    {
      name:"Rahman",
      id: "15101122",
      campus: "buet"
    },
    {
      name:"Tushi",
      id: "128(old)",
      campus: "iit"
    }
]

var array=object.map(x => x.name);
console.log(array);


//----------------------------Object Find : --------------------------------------
var object=[
  {
    cse330: 85,
    cse420: 87,
    cse310: 90
  },
  {
    cse330: 92,
    cse420: 78,
    cse310: 94
  },
  {
    cse330: 75,
    cse420: 76,
    cse310: 93
  },
  {
    cse330: 81,
    cse420: 98,
    cse310: 63
  },
  {
    cse330: 67,
    cse420: 89,
    cse310: 31
  },
]

var array=object.find(x => x.cse310 > 80);
console.log(array);

// --------------------- Closure -----------------------
function check(){
  var count=0;
  return function(){
    count++;
    return count;
  }
}

var box=check();
console.log(box());
console.log(box());
console.log(box());
console.log(box());

var box1=check();
console.log(box1());
console.log(box1());
console.log(box1());
console.log(box1());

//---------------------------Array Slice-----------------------------
var array=[11,22,33,44,55,66,77];
var newArray=array.slice(1,4);
console.log(newArray);

//----------------------------Array Splice---------------------------
var array=[11,22,33,44,55,66,77];
var newArray=array.splice(4,1,"creep");
console.log(array);

//---------------------Continue-------------------------------
function check(){
  for(var i=0;i<=10;i++){
    if(i==5){
      console.log("Here is a continue");
      continue;
    }
    console.log("Value : "+i);
    
  }
}

check();

//---------------------Break-------------------------------
function check(){
  for(var i=0;i<=10;i++){
    if(i==5){
      console.log("Here is a continue");
      break;
    }
    console.log("Value : "+i);
    
  }
}

check();

