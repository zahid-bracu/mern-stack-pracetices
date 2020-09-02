function stack(){
    this.count=0;
    this.storage={};
  
    this.push= (value) => {
      this.storage[this.count]=value;
      this.count++;
    }
  
    this.pop= () =>{
      this.count--;
      var temp=this.storage[this.count];
      return temp;
    }
  
    this.peek = () =>{
      return this.storage[this.count-1];
    }
  
    this.size= () =>{
      return this.count;
    }
  }
  
  
  var mystack=new stack();
  for(var i=10; i<=50; i+=5){
    mystack.push(i);
  }
  console.log("Size : "+mystack.size());
  console.log(mystack.pop());
  console.log(mystack.pop());
  console.log(mystack.pop());
  console.log(mystack.pop());
  console.log(mystack.peek());
  console.log(mystack.peek());
  console.log(mystack.peek());
  console.log(mystack.peek());
  console.log("Size : "+mystack.size());