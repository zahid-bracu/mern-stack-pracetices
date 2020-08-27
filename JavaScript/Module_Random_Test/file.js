function check(num,func){
    num=func(num);
    console.log(num);
}

function double(number){
    number=number*2;
    return number;
}

check(10,double);