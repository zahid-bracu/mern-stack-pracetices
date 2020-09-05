var person={
    fname:"kislu",
    lname:"Bajlu",
    id: 420,
    salary: 3000,
  
    // --------------function inside object----------------
    getName : function(){
      return "My Name is "+ this.fname +" "+this.lname;
    },
  
    //---------------function inside object with return value------------
    withdraw : function(amount){
      this.salary=this.salary-amount;
      return this.salary;
    }
  }
  var name=person.getName();
  console.log(name);
  
  var amount=person.withdraw(800);
  console.log(amount);
  
  
  //other object
  var heroPerson={
    name:"Hublo",
    salary: 4000
  }
  
  var foulPerson={
    name:"Dublo",
    salary: 5000
  }
  
  var dashingPerson={
    name:"Dashing Nayan",
    salary: 8000
  }
  
  //----------------------binding------------------------
  var foulSalary=person.withdraw.bind(foulPerson);
  var value=foulSalary(550);
  console.log(value);
  
  //--------------------------call--------------------------------------
  person.withdraw.call(heroPerson, 120);
  console.log(heroPerson.salary);
  
  //-------------------------apply---------------------------------
  person.withdraw.apply(dashingPerson, [2873]);
  console.log(dashingPerson.salary);
  

  //------------------------------ Make a local variable to global-----------------------------
  function add(num1,num2){
    result=num1+num2;
    return result;
  }
  
  //console.log(result);
  var val=add(10,20);
  console.log(result);


  // ----------------------- Class  with this & new-----------------------------
  class person{
    constructor(name,id){
      //this
      this.name=name,
      this.id=id
    }
  }
  //new
  const object=new person("Kislu",420);
  console.log(object);
  
  
  
  //-------------------------------------function with this & new----------------------------------
  function student(name,id){
    this.name=name,
    this.id=id
  }
  const info=new student("Hublo",15101122);
  console.log(info);
  


  // --------------------------------Object with this---------------------------------------------
  const object={
    name : "KisLu",
    getInfo : function(){
      console.log("Name : "+this.name);
    }
  }
  
  const object2={
    name : "BajLu",
  }
  
  // adding the function with second object
  object2.getInfo=object.getInfo;
  object2.getInfo();
 
  
  // ------------------------------ this with : adding function to a object--------------------------------
  const object={
    id:420,
    steam: "CSE"
  }
  
  
  function add(a,b){
    var result=a+b;
    return result;
  }
  
  //
  var value = add(10,12);
  console.log(value);
  
  //using add function to engage it to the 
  object.sum=add;
  object.sum(30,22);

//----------------------------------------------- Async message & Then------------------------------------------
async function check(){
  return "This is my Message";
}

var msg=check();
msg.then(res => console.log(res));

// ---------------------------------------------Set Time Out---------------------------------------------
setTimeout(function(){
  console.log("Will be printed after 4 sec")
},2000)

//Set Time Out with arrow function
setTimeout(()=>{
  console.log("Will be printed after 2 sec")
},2000)

// Set Time Out 2
var num=10;
function check(){
  num++;
  console.log("Messages "+num);
}

check();
check();
setTimeout(check,2000);
check()


// -----------------------------------Set Interval------------------------------------------
setInterval(()=>{
  console.log("Will be printed after every 1 sec")
},1000)


// --------------------------------- Stop watch -------------------------
var sec=0;
var minute=0;

setInterval(()=>{
  if(sec%60==0 && sec>0){
    sec=0;
    minute++;
  }
  console.log(minute+":"+sec)
  sec++;
},1000)


// _------------------------------- Time  Duration ----------------------------
const start=new Date();
let sum=0;
for(var i=0;i<=100000;i++){
  sum+=465;
}
const end =new Date();
var time=end-start;
console.log("Time : "+time);
console.log("Sum : "+sum);