import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("React Search Application");
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchfield] = useState([]);

  useEffect(() => {
    fetch("https:jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => setMonsters(response));
  }, []);

  const handleClick = () => {
    setName("Changed");
  };

  const filteredMonsters = monsters.filter((item) => {
    return item.name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <header className="App-header">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            const searchField = event.target.value.toLocaleLowerCase();

            setSearchfield(searchField);
          }}
        />
        {filteredMonsters.map((item, index) => {
          return <h1 key={index}>{item.name}</h1>;
        })}
        <button onClick={() => handleClick()}>{name}</button>
      </header>
    </div>
  );
}

export default App;
