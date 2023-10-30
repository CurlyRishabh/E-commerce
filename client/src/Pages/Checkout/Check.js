import React, {useState, useEffect} from "react";   
import Cookies from "js-cookie";
import "./checkout.css";
import { AiOutlineUserAdd, AiOutlineHome} from "react-icons/ai";
import {BiSolidStore} from "react-icons/bi";
import {Link} from "react-router-dom";




function OrderList(props){
    return (
		<>
			<p className="w-2/3 font-mono text-gray-800 text-sm">
				{props.title} x {props.qty}
			</p>
			<p className="w-1/3 font-mono text-gray-800 text-center">
				${props.qty * props.newPrice}
			</p>
		</>
	);
}

function Check({handleShow}){
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		address: "",
		email: "",
		phone: "",
		pincode: "",
		notes: "",
	});
    const [order,setOrder]=useState([]);
    const [total,setTotal]=useState(0);
    
    useEffect(() => {
        const cookieValue = Cookies.get("productList");
        
		if (cookieValue) {
			const parsedData = JSON.parse(cookieValue);
			const totalPrice = parsedData.reduce((total, product) => total + product.qty * parseFloat(product.newPrice), 0);

			setTotal(totalPrice);

			setOrder(parsedData);
		}
	}, []);
        console.log(order);

	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormData({...formData, [name]: value});
	};

const handleSubmit = (e) => {
	e.preventDefault();
	
	const requiredFields = ["firstName", "lastName", "address", "email", "phone", "pincode"];

	const formValid = requiredFields.every((field) => formData[field] !== "");

	if (formValid) {
		console.log("Form submitted:", formData);
        const temp=[formData,order,total];
		Cookies.set("OrderList", JSON.stringify(temp), {expires: 1});
		Cookies.remove("productList");

        handleShow();
        setFormData({
			firstName: "",
			lastName: "",
			address: "",
			email: "",
			phone: "",
			pincode: "",
			notes: "",
		});
		
	} else {
		alert("Please fill in all required fields.");
	}
};

    

	return (<div className="bg-slate-200  flex justify-center">
						<div className="flex border-b-2 border-gray-300 p-2  fixed bg-white w-full h-10 top-0 left-0 justify-between items-center">
							<Link to="/home">
								<AiOutlineHome className=" flex items-center w-6 h-6 text-orange-700">Home</AiOutlineHome>
							</Link>
							<h1>Checkout Page</h1>
							<div className="flex justify-around w-2/6 md:w-1/6">
								<Link to="/products">
									<BiSolidStore className="w-6 h-6" />
								</Link>

								<Link to="/profile">
									<AiOutlineUserAdd className="w-6 h-6" />
								</Link>
							</div>
						</div>
						<form onSubmit={handleSubmit} className="flex flex-col formed m-8 mt-12">
							<div className="flex flex-col space-y-2 font-light md:mx-40 lg:mx-72">
								<h1 className="font-semibold text-2xl border-b-2 border-slate-400 pb-2">Billing Details</h1>
								<div className="flex flex-row justify-between">
									<div className="flex flex-col w-1/2 ">
										<label htmlFor="firstName">First Name</label>
										<input
											type="text"
											id="firstName"
											name="firstName"
											placeholder="first name"
											value={formData.firstName}
											onChange={handleChange}
										/>
									</div>
									<div className="flex flex-col ml-1 w-1/2 ">
										<label htmlFor="lastName">Last Name</label>
										<input
											type="text"
											id="lastName"
											name="lastName"
											placeholder="last name"
											value={formData.lastName}
											onChange={handleChange}
										/>
									</div>
								</div>
								<label htmlFor="address">Address:</label>
								<input
									type="text"
									id="address"
									name="address"
									placeholder="House number and street address"
									value={formData.address}
									onChange={handleChange}
								/>

								<label htmlFor="email">Email:</label>
								<input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

								<label htmlFor="phone">Phone Number:</label>
								<input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />

								<label htmlFor="pincode">Pincode:</label>
								<input
									type="text"
									id="pincode"
									name="pincode"
									value={formData.pincode}
									onChange={handleChange}
								/>

								<h1 className="font-semibold text-xl border-b-2 border-slate-400 py-2">
									Additional information
								</h1>

								<label htmlFor="notes">Notes:</label>
								<textarea
									id="notes"
									name="notes"
									className="border-[1px] mx-2 border-gray-500"
									placeholder="Note about your e.g. special note for delivery."
									value={formData.notes}
									onChange={handleChange}
								/>
							</div>
							<div className=" border-2 border-gray-800 flex flex-col items-center p-2 mt-10 md:mx-40 lg:mx-72">
								<h1 className="font-semibold text-2xl border-b-2 border-slate-400 pb-2">Order List</h1>
								<div className="flex flex-wrap justify-between  w-full">
									<h2 className="w-2/3 font-semibold text-gray-700 text-xl">Product</h2>
									<h2 className="w-1/3 font-semibold text-gray-700 text-xl text-center">Sub Total</h2>
									<p className="border-t-2 border-gray-400 w-full my-4 "></p>

									{order.map((x) => {
										return <OrderList title={x.title} newPrice={x.newPrice} qty={x.qty} />;
									})}
									<p className="border-t-2 border-gray-400 w-full my-4 "></p>
									<p className="w-2/3 font-thin text-2xl  ">Total</p>
									<p className="w-1/3 font-thin text-2xl  text-center">${total}</p>
									<button
										type="submit"
										className="text-xl rounded h-10 w-full mx-10 mt-8  bg-blue-700 text-white font-bold"
									>
										Place Order
									</button>
								</div>
							</div>
						</form>
					</div>		
			
	);
};

export default Check;
