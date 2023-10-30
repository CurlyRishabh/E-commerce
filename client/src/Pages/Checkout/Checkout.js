import React from 'react';
import { useState,useEffect } from 'react';
import Check from './Check'
import Cookies from "js-cookie";

import OrderID from "./OrderID";

export default function Checkout() {
	const [show,setShow]= useState(true);

	useEffect(() => {
		const cookieValue = Cookies.get("productList");
		console.log(cookieValue);
		if (cookieValue) {
			const parsedData = JSON.parse(cookieValue);
			console.log(parsedData);
		}else{
			setShow(false);
		}
	}, []);
  return (
	<>
		{show?<Check handleShow={()=> setShow(false)}/>:<OrderID/>}
	</>
  )
}
