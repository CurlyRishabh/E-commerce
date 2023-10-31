import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './App.css'
import ProductHome from "./Pages/Product/ProductHome"
import Cart from './Pages/Cart/cart';

import Home from "./Pages/Home/Home"
import Checkout from './Pages/Checkout/Checkout';
import Footer from "./Pages/Home/Footer";



function App(){
	const path = window.location.pathname;
	console.log(path);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate replace to="/home" />} />

				<Route path="/home" element={<Home />}></Route>
				<Route path="/products" element={<ProductHome />}></Route>
				<Route path="/cart" element={<Cart />}></Route>
				<Route path="/checkout" element={<Checkout />}></Route>
			</Routes>
			<Footer />;
		</BrowserRouter>
	);
}
export default App;
