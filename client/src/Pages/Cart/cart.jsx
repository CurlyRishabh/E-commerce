import "./cart.css";
import data from "../../Database/data";
import {useState} from "react";
// import { AiFillStar } from "react-icons/ai";
// import { AiOutlineClose } from "react-icons/ai";
// import { BsHeartFill } from "react-icons/bs";
function CounterDetails(props) {
	const [count, setCount] = useState(1);

	function handleCount(val) {
		setCount((x) => x + val);
		props.countResult(val * props.price);
	}

	return (
		<div className="counter-detail-container">
			<div className="counter-container">
				<button disabled={count <= 0} onClick={() => handleCount(-1)}>
					-
				</button>
				<p>{count}</p>
				<button onClick={() => handleCount(1)}>+</button>
			</div>

			<div className="size-container">
				<label htmlFor="shoeSize">Size:</label>
				<select id="shoeSize">
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="9.5">9.5</option>
				</select>
			</div>

			<div className="product-price-container">
				<button onClick={() => props.del(props.title, count * props.price)}>X</button>
				<h2>${count * props.price}</h2>
			</div>
		</div>
	);
}

function Container(x) {
	return (
		<div className="product-container">
			<img src={x.img} />
			<div className="product-descprition">{x.title}</div>

			<div className="select-container">
				<CounterDetails title={x.title} price={x.newPrice} countResult={x.countResult} del={x.del} />
			</div>
		</div>
	);
}

function Cart() {
	const [x, setX] = useState([data[0], data[3], data[19]]);
	const [total, setTotal] = useState(Number(data[0].newPrice) + Number(data[3].newPrice) + Number(data[19].newPrice));
	function countResult(add) {
		setTotal(total + add);
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
		<div className="cart-container">
			<div className="cart-description">
				<p>Shopping Cart</p>
				<p
					className="cart-remove"
					onClick={() => {
						setX([]);
						setTotal(0);
					}}
				>
					Remove all
				</p>
			</div>
			{x.map((x) => (
				<Container
					img={x.img}
					title={x.title}
					category={x.category}
					newPrice={x.newPrice}
					countResult={countResult}
					del={del}
				/>
			))}
			{total ? (
				<div className="cart-final">
					<p>Total: ${total}</p>
					<button onClick={handleCheckOut}> checkout</button>
				</div>
			) : (
				"empty"
			)}
		</div>
	);
}

export default Cart;
