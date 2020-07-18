// Temp Swap
var x=12;
var y=22;
var t=x;
x=y;
y=t;

console.log(x);
console.log(y);


// minus swap
var a=10;
var b=20;
a=a+b;
b=a-b;
a=a-b;

console.log("a :"+a);
console.log("b :"+b);


// using array swap
var m=100;
var n=200;
[m,n]=[n,m];
console.log("m : "+m);
console.log("n : "+n);

//finding largest element of an array
array=[11,22,33,44,55,66,77,54,23,46,12];
var max=0;
for(var i=0;i<array.length;i++){
  if(array[i]>max){
    max=array[i];
  }
}

console.log(max);

//max value of three number
var num1=20;
var num2=10;
var num3=15;

if(num1>num2){
  if(num1>num3){
    console.log("Biggest : "+num1);
  }else{
    console.log("Biggest : "+num3);
  }
}else{
  if(num2>num3){
    console.log("Biggest : "+num2);
  }else{
    console.log("Biggest : "+num3);
  }
}


//sum of all number in an array
let sum=0;
array=[11,21,13,43,32,67,14];
for(var i=0;i<array.length;i++){
  sum+=array[i];
}

//count number of words in a string
var speech = "This is my december";
var count=0;
for(var i=0;i<speech.length;i++){
  if(speech[i]!=' '){
     count++;
  }
}

console.log(count);

//reverse a string from the backward position
var speech = "This is my december";
var rev;
for(var i=speech.length-1;i>=0;i--){
  rev+=speech[i];
}

console.log(rev);