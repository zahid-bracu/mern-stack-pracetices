var info=[
    {
      id:15101122,
      name:"Zahid",
      campus:"Bracu",
      country:"BD"
    },
    {
      id:19241051,
      name:"Rahman",
      campus:"Buet",
      country:"BD"
    },
    {
      id:"128(C)",
      name:"Tushi",
      campus:"Iit",
      country:"India"
    }
  ]
  
  // stringify
  var infoJSON=JSON.stringify(info);
  console.log("JSON Data : "+infoJSON);
  
  //Parse
  var newInfo=JSON.parse(infoJSON);
  console.log("Object Data : ");
  console.log(newInfo);
  