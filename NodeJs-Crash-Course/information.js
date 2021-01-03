class Information{
    constructor(name,id){
        this.name=name,
        this.id=id
    }

    message(){
        console.log(`Hi My name is ${this.name} & my id is ${this.id}`);
    }
}

module.exports=Information;