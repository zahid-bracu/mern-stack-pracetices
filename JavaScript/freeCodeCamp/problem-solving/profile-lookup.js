//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    },
    {
        "firstName": "Spooky",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lastNameFinder(name,lastNameProp){
    for(var i=0;i<contacts.length;i++){
        if(contacts[i].firstName===name && contacts[i].hasOwnProperty(lastNameProp))
            return contacts[i][lastNameProp];
        else if(contacts[i].firstName===name && !contacts[i].hasOwnProperty(lastNameProp))
            return 'No Last name';
    }
    return 'No Such Name'
}

var res=lastNameFinder("Harry", "lastName");
console.log(res);


var resTwo=lastNameFinder("Potter", "lastName");
console.log(resTwo);