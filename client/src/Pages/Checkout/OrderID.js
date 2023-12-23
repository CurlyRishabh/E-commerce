import React from "react";
import {useState, useEffect} from "react";
import Cookies from "js-cookie";
import Confetti from "react-confetti";

// import OrderList from "./Check"



function Details({userInfo}){
return (
	<div className="bg-red-100 pb-10">
		<Confetti />
		<h2 className="text-2xl font-bold text-center mb-4">Order Information</h2>

		<div className="max-w-md mx-auto bg-gray-100 shadow p-6 rounded-lg">
			<div className="grid grid-cols-2 gap-4">
				{Object.entries(userInfo).map(([key, value]) => (
					<div key={key} className="mb-4">
						<p className="text-gray-700 font-bold">{key.replace(/([A-Z])/g, " $1").toUpperCase()}:</p>
						<p className="text-gray-700">{value}</p>
					</div>
				))}
			</div>
		</div>
	</div>
);
}


export default function OrderID() {
	const [order, setOrder] = useState([]);
	
	useEffect(() => {
		const cookieValue = Cookies.get("OrderList");
		
		if (cookieValue) {
			const parsedData = JSON.parse(cookieValue);
			setOrder(parsedData);
		}
	}, []);
	
	

	

return <>{order.length !== 0 ?<Details userInfo={order} />:<>fef</>}</>;
}