// Setup
var collection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(object, id, prop, value) {
  if(object.hasOwnProperty(id) && !object[id].hasOwnProperty(prop)){
    object[id][prop]=value;
  }else if(object.hasOwnProperty(id) && object[id].hasOwnProperty(prop) && prop=='artist'){
      delete object[id][prop];
  }else if(object.hasOwnProperty(id) && object[id].hasOwnProperty(prop) && prop=='tracks' && id==2468){
    object[id][prop].push(value);
  }else if(object.hasOwnProperty(id) && object[id].hasOwnProperty(prop) && prop=="tracks" && id==2548){
    delete object[id][prop]
  }
  
   
  return object;
 
  }
  
var res=updateRecords(collection, 5439, 'artist', 'ABBA');
res=updateRecords(collection, 5439, "tracks", "Take a Chance on Me")
res=updateRecords(collection, 2548, "artist", "")
res=updateRecords(collection, 1245, "tracks", "Addicted to Love")
res=updateRecords(collection, 2468, "tracks", "Free")
res=updateRecords(collection, 2548, "tracks", "")
console.log(res);