import Nav from "./Navigation/Nav";
import data from "../../Database/data";
import Card from "./components/Card";
import Product from "./product/product";
import React, {useState, useEffect} from "react";
import Category from "./Sidebar/Category";
import Cookies from "js-cookie";

// import "../App.css";

function ProductHome() {
	const [items, setItems] = useState([]);
	const [query, setQuery] = useState();
	const [cart, setCart] = useState([]);

	function handleCartClick(x) {
		Cookies.set("productList", JSON.stringify([...cart, x]), {expires: 1});
		setCart([...cart, x]);
	}
	useEffect(() => {
		setItems(data);
		const cookieValue = Cookies.get("productList");
		if (cookieValue) {
			const parsedData = JSON.parse(cookieValue);

			setCart(parsedData);
		}
	}, []);

	function handleClick(x) {
		console.log(x.target.value)
		setQuery(x.target.value.toLowerCase());
		
	}
	function filterProduct() {
		let product = items;
		if (query) {
			product = product.filter((x) => x.category === query || x.color === query || x.title.toLowerCase().includes(query));
		}
		console.log(product);
		return product.map((x) => (
			<Card
				// key={x.title}
				title={x.title}
				img={x.img}
				star={x.star}
				newPrice={x.newPrice.substring(0, 4)}
				prevPrice={x.prevPrice}
				reviews={x.reviews}
				handleCartClick={handleCartClick}
				company = {x.company}
				category = {x.category}
			/>
		));
		// setCategory("");
	}

	const filteredItems = filterProduct();

	return (
		<div>
			<Nav handleSearch={handleClick} />
			<Category handleChange={handleClick} />
			<Product res={filteredItems} />
		</div>
	);
}
export default ProductHome;