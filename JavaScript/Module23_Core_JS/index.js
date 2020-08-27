//------------------- constant variable---------------------
const value=10;
//value=12;
console.log(value);


//---------------------Constant Array------------------------
const array=[11,22,33,44,55,66];
array[3]=123;
array.push(212);
//array=[12,34,53,34];
console.log(array);


//----------------------Constant Object------------------------
const object={
    name:'zahid',
    id:'14101',
    campus:'BRACU'
  }
  object.name="rahman";
  console.log(object);
 
 //  const object={
 //    name:'blank',
 //    id:'Nan',
 //    campus:'None'
 //  }


//  --------------------Let Variable + Scope Variable--------------
for(let i=0;i<=5;i++){
    console.log(`Value ${i}`);
  }
  // console.log(`Outer Value ${i}`);


// -------------------- default value set to function variabe : Part One----------------
function add(x,y){
  y = y || 10;
  return x+y;
}
var res=add(10);
console.log(res);

//--------------- default value set to function : Part Two------------------------------
function add(x,y=10){
    return x+y;
  }
  var res=add(10);
  console.log(res);

// ---------------- String formation--------------------------------------
var str1="Hello";
var str2="World";
var result= `${str1} ${str2} 100`;
console.log(result);

//------------------ String formation : New Line-------------------
var string=`this is my december
this is my snow covered eyes`;
console.log(string);

// ---------------------------- Arrow Function ----------------------------------

// Arrow Function Example 1
var func= x=> x*x;
var res=func(10)
console.log(res);

// Arrow Function Example 2
var func= x=> {
  x--;
  x+=10
  return x
};
var res=func(10)
console.log(res);

// Arrow Function Example 3
var func= (x,y)=> {
  x+=y;
  x+=10;
  return x
};
var res=func(10,5)
console.log(res);

// Arrow Function Example 4
var func = () => 10;
var res=func();
console.log(res);


//------------------------spread operator : combine all array together--------------------------
var array1=[110,220,330];
var array2=[100,200,300];

var newArray=[...array1,...array2,100];
console.log(newArray);


//--------------------------max value---------------------------
var newArray=[110,22,150,99,26,33,142]
var max=Math.max(...newArray);
console.log(max);


//------------------------class & constructor-----------------------
class student{
  constructor(name,id){
    this.Name=name;
    this.Id=id;
    this.Campus="BRACU";
  }
}

const student1=new student('Zahid',15101122);
const student2=new student('Rahman',19241051);

console.log(student1);
console.log(student2);

console.log(student1.Name)
console.log(student2.Id)

// ---------------------------Inheritances & Class------------------
class Parents{
  constructor(fname){
    this.fname="Farid Box";
  }
}

class Children extends Parents{
  constructor(name){
    super();
    this.name=name;
  }

  getInfo(){
    return `My Name ${this.name} and father name is ${this.fname}`;
  }
} 

const child=new Children("Jashim Box");
var message=child.getInfo();
console.log(message);

//----------------------Destructure Object----------------------------------
var objects={
  name: 'zahid',
  id: '14101122',
  campus: 'bracu',
  location: 'dhaka',
  info:{
    batch: 'spring15',
    time: 'morning'
  }
}

var {name,campus,location}=objects;
var {batch}=objects.info;
var {time}=objects.info;
console.log("Time : "+time);
console.log("Campus : "+campus);
console.log("Batch : "+batch);

//----------------------Destructure Array -------------------------------------

var array=['121','212','313','131','454'];
console.log(array);

var [minOne,minTwo,...rest]=array;

console.log("Minimum One : "+minOne);
console.log("Minimum Two : "+minTwo);
console.log("Rest Number : "+rest);