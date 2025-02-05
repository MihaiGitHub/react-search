import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { getData } from "./utils/data.utils";
import "./App.css";

type Monster = {
  id: string;
  name: string;
  email: string;
};

function App() {
  const [monsters, setMonsters] = useState([]);
  const [monsters2, setMonsters2] = useState(monsters);
  const [title, setTitle] = useState("");
  const [searchField, setSearchfield] = useState([]);

  console.log("rendered");

  useEffect(() => {
    console.log("component mounted");

    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https:jsonplaceholder.typicode.com/users"
      );
    };
  }, []);

  const filteredMonsters = monsters.filter((item) => {
    return item.name.toLocaleLowerCase().includes(searchField);
  });

  const onTitlechange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    setTitle(searchString);
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <header className="App-header">
        <SearchBox
          className={"search-box"}
          setSearchfield={setSearchfield}
          placeholder={"search monsters"}
        />
        <SearchBox
          className={"search-box"}
          onChangeHandler={onTitlechange}
          placeholder={"title set"}
        />
        <CardList monsters={monsters2} />
      </header>
    </div>
  );
}

export default App;
