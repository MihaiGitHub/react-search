import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [monsters2, setMonsters2] = useState(monsters);
  const [searchField, setSearchfield] = useState([]);

  console.log("rendered");

  useEffect(() => {
    console.log("component mounted");

    fetch("https:jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => setMonsters(response));
  }, []);

  // useEffect(() => {
  //   const filteredMonsters = monsters.filter((item) => {
  //     return item.name.toLocaleLowerCase().includes(searchField);
  //   });

  //   setMonsters2(filteredMonsters);
  // }, [monsters2, searchField]);

  const filteredMonsters = monsters.filter((item) => {
    return item.name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex 1</h1>
      <header className="App-header">
        <SearchBox
          className={"search-box"}
          setSearchfield={setSearchfield}
          placeholder={"search monsters"}
        />
        <SearchBox
          className={"search-box"}
          setSearchfield={setSearchfield}
          placeholder={"new search"}
        />
        <CardList monsters={monsters2} />
      </header>
    </div>
  );
}

export default App;
