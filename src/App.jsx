import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

import "./styles/main.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/product/:id/*" element={<ProductDetail />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
