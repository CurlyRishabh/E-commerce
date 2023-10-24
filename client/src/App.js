import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import ProductHome from "./Pages/Product/ProductHome"
import Cart from './Pages/Cart/cart';

import Home from "./Pages/Home/Home"
import Footer from "./Pages/Home/Footer";



function App(){
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/home" element={<Home />}></Route>

				<Route path="/products" element={<ProductHome />}></Route>
				<Route path="/cart" element={<Cart />}></Route>
			</Routes>
			<Footer />;
		</BrowserRouter>
	);
}
export default App;
