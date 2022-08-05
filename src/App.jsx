import { useState } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";

import "./styles/main.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header></Header>
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;
