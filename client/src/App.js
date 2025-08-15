import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';

import ProductHome from "./Pages/Product/ProductHome";
import Cart from './Pages/Cart/cart';
import Home from "./Pages/Home/Home";
import Checkout from './Pages/Checkout/Checkout';

function App() {
  const path = window.location.pathname;
  console.log(path);
  
  return (
    <ThemeProvider>
      <BrowserRouter basename="/E-commerce">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductHome />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
