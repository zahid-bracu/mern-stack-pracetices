//document print
console.log(document);

//document.body print
console.log(document.body);


//console with for loop
for(var i=0;i<=10;i++){
    console.log(i);
}


//get element by tag name
var para=document.getElementById("para");
para.style.color="red";
para.innerText="Xmen";
//innerText
console.log(para.innerText);

//innerHTML
var sec=document.getElementById("sec");
console.log(sec.innerHTML);


// get element by tag name
var h4=document.getElementsByTagName("h4");
for(var i=0;i<4;i++){
    console.log(h4[i]);
}

// get element by class name
var arc=document.getElementsByClassName("arc");
for(var i=0;i<4;i++){
    console.log(arc[i]);
}

//query selector
var list=document.querySelector("#list");
console.log(list.innerText);


//query selector all
var list=document.querySelectorAll("#list");
for(var i=0;i<4;i++){
    console.log(list[i].innerText);
}