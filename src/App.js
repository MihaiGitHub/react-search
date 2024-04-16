import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("React Search Application");
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https:jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => setMonsters(response));
  }, []);

  const handleClick = () => {
    setName("Changed");
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            console.log(event);
          }}
        />
        {monsters.map((item, index) => {
          return <h1 key={index}>{item.name}</h1>;
        })}
        <button onClick={() => handleClick()}>{name}</button>
      </header>
    </div>
  );
}

export default App;
