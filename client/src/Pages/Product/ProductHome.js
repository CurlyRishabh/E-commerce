import Nav from "./Navigation/Nav";
import data from "../../Database/data";
import Card from "./components/Card";
import Product from "./product/product";
import React, {useState, useEffect} from "react";
import Category from "./Sidebar/Category";
import Cookies from "js-cookie";
import MobileNav from "./Navigation/MobileNav";

// import "../App.css";

function ProductHome() {
	const [items, setItems] = useState([]);
	const [query, setQuery] = useState();
	const [cart, setCart] = useState([]);

	function handleCartClick(x) {
		console.log(x);
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
		
	}

	const filteredItems = filterProduct();

	return (
		<div className="flex flex-col bg-slate-100">
			<Nav handleSearch={handleClick} />
			<MobileNav />
			<div className="flex mt-7 md:pt-6">
				<Category handleChange={handleClick} />
				<Product res={filteredItems} />
			</div>
			
		</div>
	);
}
export default ProductHome;
