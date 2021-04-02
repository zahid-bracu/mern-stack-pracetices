function test(a,b){
    return a==b ? 'equal' : (a>b ? `${a} is bigger`:`${b} is bigger`);
}

var result=test(100,100);
console.log(result)