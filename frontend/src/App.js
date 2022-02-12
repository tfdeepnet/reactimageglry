import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";

//const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  const [word, setWord] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("search for an -", word);
    console.log(process.env.REACT_APP_UNSPALSH_KEY);
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${process.env.REACT_APP_UNSPALSH_KEY}`
    )
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord("");
  };

  console.log(process.env.REACT_APP);
  return (
    <div className="App">
      <Header title="Images gallery!!" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
