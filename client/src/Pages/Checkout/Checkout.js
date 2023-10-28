import React, {useState, useEffect} from "react";   
import Cookies from "js-cookie";
import "./checkout.css";



function OrderList(props){
    return (
		<>
			<p className="w-2/3">
				{props.title} x {props.qty}
			</p>
			<p className="w-1/3 text-center">
				{props.qty * props.newPrice}
			</p>
		</>
	);
}

const Checkout = () => {
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

    

	return (
		<div className="flex  m-10">
			<div className="bg-slate-200 w-1/2 flex justify-center p-4">
				<form onSubmit={handleSubmit} className="flex flex-col space-y-2 font-light m-4  formed  ">
					<h1 className="font-semibold text-2xl border-b-2 border-slate-400 pb-2">Billing Details</h1>
					<div className="flex flex-row justify-between">
						<div className="flex flex-col mr-2">
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
						<div className="flex flex-col ">
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
					<input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} />

					<h1 className="font-semibold text-xl border-b-2 border-slate-400 py-2">Additional information</h1>

					<label htmlFor="notes">Notes:</label>
					<textarea
						id="notes"
						name="notes"
						placeholder="Note about your e.g. special note for delivery."
						value={formData.notes}
						onChange={handleChange}
					/>

					<button type="submit" className="text-xl rounded h-8 bg-blue-700 text-white font-bold relative top-2">
						Place Order
					</button>
				</form>
			</div>
			<div className="bg-red-100 w-1/2 flex flex-col items-center p-4">
				<h1 className="font-semibold text-2xl border-b-2 border-slate-400 pb-2">Order List</h1>
				<div className="flex flex-wrap justify-between  w-full">
					<h2 className="w-2/3">Product</h2>
					<h2 className="w-1/3 text-center">Sub Total</h2>
                    {order.map((x)=>{
                        return <OrderList title={x.title} newPrice={x.newPrice} qty={x.qty} />
                    })}
                    <p className="w-2/3">Total</p>
                    <p className="w-1/3">{total}</p>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
