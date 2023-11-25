import React, { useEffect, useState } from "react";

function App() {
  const [pups, setPups] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/pups")
      .then((response) => response.json())
      .then((data) => setPups(data));
  }, []);

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar">
        {pups.map((pup) => (
          <span key={pup.id}>{pup.name}</span>
        ))}
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info"></div>
      </div>
    </div>
  );
}

export default App;