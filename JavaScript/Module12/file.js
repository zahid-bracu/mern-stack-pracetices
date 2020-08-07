var xyz="43";
var abc=parseInt(xyz);
console.log(abc);

//hello world
console.log('Hello World');
var num1=12;
var num2=13;

//addition of two number
var result=num1+num2;
console.log(result);
console.log(typeof result);

//checking type of variable
var name="zahid";
console.log(typeof name);

var flag=true;
console.log(typeof flag);

//string lower to upper to lower class conversion
var word="I become so numb";
word=word.toUpperCase();
console.log(word);

var word2="I CAN FEEL YOU THERE";
word=word2.toLowerCase();
console.log(word2);


//checking the position of  a Word
var speech="My name is Md. Zahidur Rahman";
var position=speech.indexOf('Md.');
console.log(position);

//spliting s string sentence
var sentence="Hello from the other side";
var array=sentence.split(' ');
console.log(array);

//number conversion float to decimal
var fl=12.33;
var dec=parseInt(fl);
console.log(dec);

//number conversion technique to string
var number=10;
number=' '+number;
console.log(typeof number);


//number conversion integer to float
var int=12;
var flt=parseFloat(int);
flt+=0.33
console.log(flt);

// post increament
var num=10;
num++;
console.log(num);

//post decreament
num--;
console.log(num);

//pre increament
++num;
console.log(num);

//pre decreament
--num;
console.log(num);

//toFixed;
var floatNum=3.141647681930;
floatNum=floatNum.toFixed(4);
console.log(floatNum);

//Math class
var absolute=Math.abs(-4357.2387283);
console.log(absolute);

var round=Math.round(3.49);
console.log(round);

var ceil=Math.ceil(3.49);
console.log(ceil);

var floor=Math.floor(3.59);
console.log(floor);

var random=Math.random();
console.log(random);

//if else
var value=15;
if(value>10){
  console.log("Greater")
}else{
  console.log("Lesser");
}


// logical and

var val=15;
if (val > 10 && val < 20 ){
  console.log("Between 10 & 20");
}else{
  console.log("Not Between 10 & 20");
}

//Logical or
var val2=15;
if (val < 10 || val > 20 ){
  console.log("Matched");
}else{
  console.log("Not Matched");
}

