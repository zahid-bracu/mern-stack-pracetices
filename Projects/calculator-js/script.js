

var array=[];
var line="";

var nums=document.getElementsByClassName('num');
for(var i=0;i<nums.length;i++){
    var num=nums[i];
    num.addEventListener('click',function(event){
        console.log(event.target.value);
        array.push(event.target.value);
        var str=array.join('');
        line=str;
        document.getElementById('result-main').innerHTML=str;
    })
}

var operator=document.getElementsByClassName('operator')
for(var i=0;i<operator.length;i++){
    var op=operator[i];
    op.addEventListener('click',function(event){
        array.push(event.target.value);
        var temp=array.join('');
        line=temp;
    })
}
console.log(line);