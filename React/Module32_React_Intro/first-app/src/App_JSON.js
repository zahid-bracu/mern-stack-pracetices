import React, { useState, useEffect } from "react";

import "./styles.css";

function App() {
  const [user, setUser] = useState([]);

  // download JSON data from API
  useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  });
  return (
    <div>
      {user.map((users) => (
        <p>{users.name}</p>
      ))}
    </div>
  );
}

export default App;
