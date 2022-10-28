import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

import "./styles/main.css";
import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CartProvider } from "use-shopping-cart";
import Login from "./pages/Login/Login";
import { UserProvider } from "./context/user";
import Orders from "./pages/Orders/Orders";
import ShoppingResult from "./pages/ShoppingResult/ShoppingResult";

function App() {
  return (
    <CartProvider
      mode="payment"
      currency="COP"
      cartMode="checkout-session"
      stripe="pk_test_51Lxb7jAiTaegeo6YvSVttYyxnrtpU0nd075Km1knJ6HhbxLYRkiVXlIKqSJSyuWoYAFBi5GqUefwQzLsAHX8fvKS00vmAfPhCE"
    >
      <GoogleOAuthProvider clientId="386602516499-pt5f8m9f2dm57lisi3utvtdpdl7s6fhh.apps.googleusercontent.com">
      <UserProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/search/:query" element={<Search />} />
              <Route path="/product/:id/*" element={<ProductDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/thanks" element={<ShoppingResult />} />
              <Route path="/purchaseError" element={<ShoppingResult Error />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </UserProvider>
    </GoogleOAuthProvider>
    </CartProvider>
  );
}

export default App;
