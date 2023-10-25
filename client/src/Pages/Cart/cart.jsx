
import data from "../../Database/data";
import {useState,useEffect} from "react";
import Cookies from "js-cookie"; 

// import { AiFillStar } from "react-icons/ai";
// import { AiOutlineClose } from "react-icons/ai";
// import { BsHeartFill } from "react-icons/bs";

function TableQtyCounter(props){
		const [count, setCount] = useState(1);

		function handleCount(val) {
			setCount((x) => x + val);
		}

		return (
			<>
				<td className="">
					<div className="flex items-center justify-center w-30">
						<button
							className="border w-6 h-6 flex items-center justify-center  text-lg rounded-md bg-slate-300 hover:bg-slate-400 font-semibold"
							disabled={count <= 0}
							onClick={() => handleCount(-1)}
						>
							-
						</button>
						<p className="p-2 font-semibold">{count}</p>
						<button
							className="border w-6 h-6 flex items-center justify-center  text-lg rounded-md bg-slate-300 hover:bg-slate-400 font-semibold"
							onClick={() => handleCount(1)}
						>
							+
						</button>
					</div>
				</td>
				<td>${count * props.newPrice}</td>
				<td className="">
					<button
						onClick={() => props.handleCloseClick(props.title)}
						className="relative text-base left-9  w-6  rounded-full text-white bg-rose-500"
					>
						x
					</button>
				</td>
			</>
		);
		
}

function TableRow(props){
	return (
		<tr className="p3  text-xs text-gray-700 border-2 h-20 ">
			<td>
				<img src={props.img} className="w-28 pb-4" />
			</td>
			<td>{props.title}</td>
			<TableQtyCounter title={props.title} handleCloseClick={props.handleCloseClick} countResult={props.countResult} newPrice={props.newPrice} />
		</tr>
	);
}

function Cart() {
	const [x, setX] = useState([]);

	const [total, setTotal] = useState(Number(data[0].newPrice) + Number(data[3].newPrice) + Number(data[19].newPrice));
	function handleCloseClick(title) {
		console.log(title);
		const temp = x.filter((y) => y.title !== title);
		console.log(temp);
		if(temp.length===0)
			Cookies.set("productList", JSON.stringify([]), {expires: 1});
		else
			Cookies.set("productList", JSON.stringify(temp), {expires: 1});
		setX(temp)

		
	}
	useEffect(() => {
		const cookieValue = Cookies.get("productList");

		if (cookieValue) {
			const parsedData = JSON.parse(cookieValue);
			console.log("hello");
			setX(parsedData);
		}
	}, []);
	
	function countResult(add) {
		setTotal(total + add);
	}
	

	return (
		<div>
			<h1>Shopping Cart</h1>
			<div className="w-full p-2">
				<table className="  m-3 border-2 w-5/6 text-center	">
					<thead className="border bg-gray-300 ">
						<tr className="p-3 text-sm font-semibold ">
							<th>Product</th>
							<th>Name</th>
							<th>Qty</th>
							<th>
								Price
								
							</th>
							<th className=""></th>
						</tr>
					</thead>
					<tbody>
						{x.map((y) => (
							<TableRow
								
								countResult={countResult}
								handleCloseClick={handleCloseClick}
								newPrice={y.newPrice}
								title={y.title}
								img={y.img}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Cart;
