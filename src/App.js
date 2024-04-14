import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("React Search Application");
  const [monsters, setMonsters] = useState([
    { name: "Linda" },
    { name: "Frank" },
    { name: "Jacky" },
  ]);

  const handleClick = () => {
    setName("Changed");
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => handleClick()}>{name}</button>
      </header>
    </div>
  );
}

export default App;
