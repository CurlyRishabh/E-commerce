import Nav from "./Navigation/Nav";
import data from "../../Database/data";
import Card from "./components/Card";
import Product from "./product/product";
import React, {useState, useEffect} from "react";
import Category from "./Sidebar/Category";

// import "../App.css";

function Home() {
	const [items, setItems] = useState([]);
	const [query, setQuery] = useState();
	const [cart, setCart] = useState([]);
	const [category, setCategory] = useState("");

	function handleCartClick() {
		setCart("cartclicked");
		console.log(cart);
	}
	useEffect(() => {
		setItems(data);
	}, []);

	function handleClick(x) {
		setQuery(x.target.value.toLowerCase());
		setCategory("white");
	}
	function filterProduct() {
		let product = items;
		if (query) {
			product = product.filter((x) => x.category == query || x.color == query);
		}
		console.log(product);
		return product.map((x) => (
			<Card
				// key={x.title}
				title={x.title}
				img={x.img}
				star={x.star}
				newPrice={x.prevPrice.substring(0, 4)}
				prevPrice={x.newPrice}
				reviews={x.reviews}
				handleCartClick={handleCartClick}
				company = {x.company}
			/>
		));
		// setCategory("");
	}

	const filteredItems = filterProduct();

	return (
		<div>
			<Nav/>
			<Category handleChange={handleClick} />
			<Product  res={filteredItems} />
		</div>
	);
}
export default Home;
