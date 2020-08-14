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


  // ----------------------- Class and Function with this & new-----------------------------

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
  
  
  
  //function with this & new
  function student(name,id){
    this.name=name,
    this.id=id
  }
  const info=new student("Hublo",15101122);
  console.log(info);
  
