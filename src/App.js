import React from "react";
import "./App.css";
import Home from "./component/Home";
import Products from "./component/Products";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/Navbar";
import Product from "./component/Product";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
