//Feet to Mile
function feetToMile(n){
    mile=n/5280;
    return mile;
  }
  
  res=feetToMile(532167);
  console.log(res);

//Wood Counter
function woodCounter(chair,table,bed){
  var woodc=chair*1;
  var woodt=table*3;
  var woodb=bed*5;
  var total=woodc+woodb+woodt;
  return total;
}

var res=woodCounter(6,3,3);
console.log(res);


