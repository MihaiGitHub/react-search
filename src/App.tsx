import { useState, useEffect, ChangeEvent } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { getData } from "./utils/data.utils";
import "./App.css";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

function App() {
  // expects a monsters array
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [monsters2, setMonsters2] = useState(monsters);
  const [title, setTitle] = useState("");
  // typescript can infer the type if it has the type assigned already "empty string"
  const [searchField, setSearchfield] = useState("");

  console.log("rendered");

  useEffect(() => {
    console.log("component mounted");

    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https:jsonplaceholder.typicode.com/users"
      );

      // must send a monsters array
      setMonsters(users);
    };

    fetchUsers();
  }, []);

  const filteredMonsters = monsters.filter((item) => {
    return item.name.toLocaleLowerCase().includes(searchField);
  });

  const onTitlechange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchString = event.target.value.toLocaleLowerCase();
    setTitle(searchString);
  };

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchfield(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <header className="App-header">
        <SearchBox
          className={"search-box"}
          onChangeHandler={onSearchChange}
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
