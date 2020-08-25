
//Async Example One
setTimeout(()=>{
    console.log("1st Line is Printing")
  },5000);
  
  setTimeout(()=>{
    console.log("2nd Line is Printing")
  },4000);
  
  setTimeout(()=>{
    console.log("3rd Line is Printing")
  },3000);
  
  setTimeout(()=>{
    console.log("4th Line is Printing")
  },2000);
  
  setTimeout(()=>{
    console.log("5th Line is Printing")
  },1000);


  //Async Example Two
  function calling(){
    setTimeout(()=>{
      console.log("Function is called after 2 second");
    },2000);
  }
  
  function check(){
    console.log("Function is calling");
    calling();
  }
  
  check();