import React from "react";
import "./App.css";
import ProductPage from "./pages/ProductPage/ProductPage";

import { useState } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import "./styles/main.css";
import { useEffect } from "react";

function App() {
  const [search, setSearch] = useState("");

  const handleSearch = (query) => {
    console.log(query);
    setSearch(query);
    fetch("https://oldwave-backend.herokuapp.com/api/product?query=" + query)
      .then((response) => response.json())
      .then((data) => console.log(data, search));
  };

  return (
    <div>
      <Header></Header>
      <SearchBar onSearch={handleSearch} />
      <ProductPage />
    </div>
  );
}

export default App;
