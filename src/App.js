import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("React Search Application");
  return (
    <div className="App">
      <header className="App-header">{name}</header>
    </div>
  );
}

export default App;
