// array
arrayOne=[11,22,33,44,'spooky','creepy'];

// array print
console.log(arrayOne);

// array index
var value=arrayOne[4];
console.log(value);

//array indexOf
var check='creepy';
var exist=arrayOne.indexOf(check);
console.log("index : "+exist);


//index value set
arrayOne[3]='evil';
console.log(arrayOne);

//array pop
arrayOne.pop();
console.log(arrayOne);

//array push
arrayOne.push('nightmare');
console.log(arrayOne);

//array shift
arrayOne.shift();
console.log(arrayOne);

//array unshift
arrayOne.unshift("Death Star");
console.log(arrayOne);

//array length
var length=arrayOne.length;
console.log("Array Length : "+length);

//array slice
newArray=arrayOne.slice(3,6);
console.log(newArray);

//array splice***** revise
arrayTwo=[10,20,30,40,50,60,70,80,90];
var array=arrayTwo.splice(2,6);
console.log(arrayTwo); //10, 20, 90
console.log(array) //30, 40, 50, 60, 70, 80 

//while loop
var i=1;
while(i<10){
    console.log("Printing : "+i);
    i++;
}


//for Loop
for(var j=0;j<=10;j++){
    console.log("Value of j : "+j);
}


//switch case
var value=11;
switch(value){
    case 10:
        console.log("It's 10");
        break;
    case 20:
        console.log("It's 20");
        break;
    default:
        console.log("It doesn't match");
        break;
}

//function
function func(){
    console.log("Function is working");
}
func();

//function parameter pass & return
function method(num1,num2){
    var result=num1+num2;
    return result;
}

var result=method(10,20);
console.log(result);

//function default parameter
function method(num1,num2=120){
    var result=num1+num2;
    return result;
}

var result=method(10);
console.log(result);


//object
object={
    name:"zahid",
    id:"15101122",
    campus:"Bracu"
}

//property access
console.log(object.name);
console.log(object["id"]);

// ***** Rare case object access****
var store="campus";
console.log(object[store]);

//property change
object.name="Tushi";
console.log(object);


//property add
object.result=3.00;
console.log(object);