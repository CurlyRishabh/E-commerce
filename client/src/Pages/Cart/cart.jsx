import data from "../../Database/data";
import {useState, useEffect} from "react";
import Cookies from "js-cookie";

import {FiHeart} from "react-icons/fi";
import {MdProductionQuantityLimits} from "react-icons/md";

import {BiSolidStore} from "react-icons/bi";
import {AiOutlineShoppingCart, AiOutlineUserAdd, AiOutlineHome} from "react-icons/ai";

import {Link} from "react-router-dom";

function TableQtyCounter(props) {
	const [count, setCount] = useState(props.qty);

	function handleCount(val) {
		setCount((x) => x + val);
		props.countResult(val * props.newPrice);
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
			<td>
				<div className="flex items-center justify-center">
					<p className="absolute">${count * props.newPrice}</p>
					<button
						onClick={() => props.handleCloseClick(props.title, -1 * count * props.newPrice)}
						className=" absolute right-1 md:right-4 text-base  w-6	  rounded-full text-white bg-rose-500"
					>
						x
					</button>
				</div>
			</td>
		</>
	);
}

function TableRow(props) {
	return (
		<tr className="p3  text-xs text-gray-700 border-2 h-20 ">
			<td className="justify-center flex">
				<img src={props.img} className="w-28 pb-4 " />
			</td>
			<td>{props.title}</td>
			<TableQtyCounter
				title={props.title}
				handleCloseClick={props.handleCloseClick}
				countResult={props.countResult}
				newPrice={props.newPrice}
				qty={props.qty}
			/>
		</tr>
	);
}

function Cart() {
	const [x, setX] = useState([]);
	const [empty, setEmpty] = useState(false);
	const [total, setTotal] = useState(0);
	function handleCloseClick(title, price) {
		console.log(title, price);
		countResult(price);
		const temp = x.filter((y) => y.title !== title);
		console.log(temp);
		if (temp.length === 0) {
			Cookies.set("productList", JSON.stringify([]), {expires: 1});
			setEmpty(true);
		} else Cookies.set("productList", JSON.stringify(temp), {expires: 1});
		setX(temp);
	}
	useEffect(() => {
		const cookieValue = Cookies.get("productList");
		console.log("cart", cookieValue);
		if (cookieValue) {
			const parsedData = JSON.parse(cookieValue);
			const totalPrice = parsedData.reduce((total, product) => total + (product.qty*parseFloat(product.newPrice)), 0);
			
			
			
			setTotal(totalPrice);
			
			setX(parsedData);
		}
	}, []);

	function countResult(add) {
		setTotal((prev)=> prev+add);
	}

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="flex border-b-2 border-gray-300 p-2  fixed bg-white w-full h-10 top-0 left-0 justify-between items-center">
				<Link to="/">
					<AiOutlineHome className=" flex items-center w-6 h-6 text-orange-700">Home</AiOutlineHome>
				</Link>
				<h1>Shopping Cart</h1>
				<div className="flex justify-around w-2/6 md:w-1/6">
					<Link to="/products">
						<BiSolidStore className="w-6 h-6" />
					</Link>

					<Link to="/profile">
						<AiOutlineUserAdd className="w-6 h-6" />
					</Link>
				</div>
			</div>
			{empty ? (
				<div className=" flex mt-7 md:pt-6 h-96 justify-center items-center">
					<MdProductionQuantityLimits className="w-40 h-40 text-gray-800" />
					<p className="font-bold font-mono text-gray-800">Cart empty</p>
				</div>
			) : (
				<>
					<table className="  m-3 border-2 w-5/6 text-center mt-14	">
						<thead className="border bg-gray-300 ">
							<tr className="p-3 text-sm font-semibold ">
								<th>Product</th>
								<th>Name</th>
								<th>Qty</th>
								<th>Price</th>
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
									qty={y.qty}
								/>
							))}
						</tbody>
					</table>
					<div className="flex justify-between mx-3 my-2 rounded-md items-center border-2 w-5/6  p-4 ">
						<p className="font-medium">Sub-Total: ${total}</p>
							<Link to="/checkout">
								
						<button className="bg-blue-600 px-2 h-8 rounded-lg text-white font-semibold ">Checkout</button>
							</Link>
					</div>
				</>
			)}
		</div>
	);
}

export default Cart;
