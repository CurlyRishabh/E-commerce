import React from "react";
import {useState, useEffect} from "react";
import Cookies from "js-cookie";
import OrderList from "./Check"

export default function OrderID() {
	const [order, setOrder] = useState({});
	
	useEffect(() => {
		const cookieValue = Cookies.get("OrderList");
		console.log("OrderID");
		if (cookieValue) {
			const parsedData = JSON.parse(cookieValue);
			setOrder(parsedData);
		}
	}, []);

	return <div>{JSON.stringify(order)}</div>;
}
