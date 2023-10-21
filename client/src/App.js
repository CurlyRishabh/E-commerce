import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Home from "./Pages/Home/Home"
import Cart from './Pages/Cart/cart';


function App(){
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/products" element={<Home />}></Route>
				<Route path="/cart" element={<Cart/>}></Route>
			</Routes>
		</BrowserRouter>
	);
}
export default App;
