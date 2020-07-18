


//inche to feet
function feet(value){
    return value/12;
}
var feet=feet(156);
console.log("Your Answer is : "+feet);

//Leap Year Checker
function checker(year){
    const result=year%4
    if(result==0){
        return "Leap Year";
    }else{
        return "Not a Leap Year";
    }
}

var result=checker(2014);
console.log(result);

//For Loop factorial checker
function fact(limit){
    var fact=1;
    for(var j=1;j<=limit;j++){
        fact=fact*j;
    }

    return fact;
}
var factorial=fact(10);
console.log(factorial);

//While loop factorial checker
function fact(limit){
    var i=1;
    var fact=1;
    while(i<=limit){
      fact=fact*i;
      i++;
      }
      return fact;
  }
var result=fact(5);
console.log(result);

//Factorial using recursive function
function fact(n){
    if(n==0){
      return 1;
    }else{
      return n*fact(n-1);
    }
  }
 
var result=fact(5);
console.log(result);



//string length
var string = "Lorem Ipsum";
var length=string.length;
console.log(length);

//let variable
let enviroment="Spooky";
enviroment="Normal";

//constant variable
let mode="Spooky";
mode="Normal";


//fibonacci in for loop
fibo=[0,1];
for(var i=2;i<=10;i++){
  fibo[i]=fibo[i-1]+fibo[i-2];
}
console.log(fibo);

//Fibonacci Using while
fib=[0,1];
var i=2;
while(i<=10){
  fib[i]=fib[i-1]+fib[i-2];
  i++;
}

console.log(fib);



//fibonacci using recursion
function fib(n){
    if(n==0){
      return 0;
    }else if(n==1){
      return 1;
    }else{
      return fib(n-1)+fib(n-2);
    }
  }
  
  console.log(fib(10));


//Prime Number Checker
var num=8;
var flag=true;
for(var i=2;i<num;i++){
  if(num%i==0){
    console.log("Not");
    break;
  }else if(i=num){
    flag=false;
  }
}

if(flag==false){
  console.log("Yes");
}