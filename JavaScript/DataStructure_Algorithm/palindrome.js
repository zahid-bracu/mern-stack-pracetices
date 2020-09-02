var letter=[];
var string="kuuk";
var newString="";
for(var i=0;i<string.length;i++){
  letter.push(string[i]);
}

for(var j=0;j<string.length;j++){
  newString+=letter.pop();
}

if(newString===string){
  console.log("Palindrome");
}else{
  console.log("Not Palindrome");
}