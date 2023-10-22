import "./cart.css";
import data from "../../Database/data";
import {useState} from "react";
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
				<td className>
					<div className="flex w-30">
						<button
							className="border m-1 w-8 h-8 text-lg rounded-md bg-slate-300 hover:bg-slate-400 font-semibold"
							disabled={count <= 0}
							onClick={() => handleCount(-1)}
						>
							-
						</button>
						<p className="p-2 font-semibold">{count}</p>
						<button
							className="border m-1 w-8 h-8 text-lg rounded-md bg-slate-300 hover:bg-slate-400 font-semibold"
							onClick={() => handleCount(1)}
						>
							+
						</button>
					</div>
				</td>
				<td>${count * props.newPrice}</td>
			</>
		);
}

function TableRow(props){
	return (
		<tr className="p3 text-sm text-gray-700 border-2 h-28 align-middle">
			<td>
				<img src={props.img} className="w-36 p-2" />
			</td>
			<td>{props.title}</td>
			<TableQtyCounter countResult={props.countResult} newPrice={props.newPrice} />
			
		</tr>
	);
}

function Cart() {
	const [x, setX] = useState([data[0], data[3], data[19]]);
	const [total, setTotal] = useState(Number(data[0].newPrice) + Number(data[3].newPrice) + Number(data[19].newPrice));
	function countResult(add) {
		setTotal(total + add);
	}
	function handleCount(){
		
	}
	function del(name, val) {
		const filtered = x.filter((a) => a.title !== name);
		console.log(filtered);
		setX(filtered);
		setTotal(total - val);
	}
	function handleCheckOut() {
		console.log(x);
	}

	return (
		<div>
			<h1>Shopping Cart</h1>
			<table className="ml-10 w-5/6 border-2 table-auto	">
				<thead className="border bg-gray-300">
					<tr className="p-3 text-sm font-semibold tracking-wide text-left">
						<th >Product</th>
						<th >Name</th>
						<th >Qty</th>
						<th >Price</th>
					</tr>
				</thead>
				<tbody>
					{x.map((y) => (
						<TableRow handleCount={handleCount}countResult={countResult} newPrice={y.newPrice} title={y.title} img={y.img} />
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Cart;
