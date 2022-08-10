import React from 'react'
import './App.css'
import ProductPage from './pages/ProductPage/ProductPage'

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
      <ProductPage/>
    </div>
  );
}

export default App;
