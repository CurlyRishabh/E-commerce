import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import ProductHome from "./Pages/Product/ProductHome"
import Cart from './Pages/Cart/cart';
import Nav from "./Pages/Product/Navigation/Nav"
import Home from "./Pages/Home/Home"


function App(){
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/home" element={<Home/>}></Route>

				<Route path="/products" element={<ProductHome />}></Route>
				<Route path="/cart" element={<Cart/>}></Route>
			</Routes>
		</BrowserRouter>
	);
}
export default App;
