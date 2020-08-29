import React, { useState } from 'react';

import './App.css';

// using function
function message(){
    console.log("Hi this is a message");
}


function App() {
    // state , use state, set count 
    const [count,setCount]=useState(0);
    
    // event handler function
    function clicks(){
        var counting = count+1;
        setCount(counting);
    }

    return (
        <div className="App">
        <p>Count : {count}</p>

        {/*Event Handler*/}
        <button onClick={()=>setCount(count-1)}>Remove</button>
        <button onClick={()=> setCount(count+1)}>Add</button>
        <button onClick={message}>Message</button>
        </div>
  );
}

export default App;
