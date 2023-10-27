import Nav from "./Navigation/Nav";
import data from "../../Database/data";
import Card from "./components/Card";
import Product from "./product/product";
import React, {useState, useEffect} from "react";
import Category from "./Sidebar/Category";
import Cookies from "js-cookie";
import MobileNav from "./Navigation/MobileNav";
import ProductEmpty from "./product/ProductEmpty";
// import "../App.css";

function ProductHome() {
	// const [items, setItems] = useState([]);
	const [query, setQuery] = useState();
	const [cart, setCart] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [filteredItems,setFilteredItems]=useState([]);


	function handleCartClick(x) {
		console.log(x);
		Cookies.set("productList", JSON.stringify([...cart, x]), {expires: 1});
		setCart([...cart, x]);
		setCartCount(cart.length)
	}
	useEffect(() => {
		const temp = listOfProduct(data)	;
		setFilteredItems(temp);
		
		const cookieValue = Cookies.get("productList");
		if (cookieValue) {
			const parsedData = JSON.parse(cookieValue);

			setCartCount(parsedData.length);
			setCart(parsedData);

		}
	}, []);

	function handleClick(x) {
		console.log(x.target.value)
		const temp = filterProduct(x.target.value.toLowerCase());
		console.log(temp);
		setFilteredItems(temp);
		setQuery(x.target.value.toLowerCase());

	}
	

	function listOfProduct(shoes){
		return shoes.map((x) => (
			<Card
				// key={x.title}
				title={x.title}
				img={x.img}
				star={x.star}
				newPrice={x.newPrice.substring(0, 4)}
				prevPrice={x.prevPrice}
				reviews={x.reviews}
				handleCartClick={handleCartClick}
				company={x.company}
				category={x.category}
			/>
		));
	}

	function filterProduct(fil) {
		let product = data;
		if (fil) {
			product = product.filter((x) => x.category === query || x.color === query || x.title.toLowerCase().includes(query));
		}
		return listOfProduct(product);
		
	}

	function sortProduct(c){
		
		let product = data;
		if (query) {
			product = product.filter(
				(x) => x.category === query || x.color === query || x.title.toLowerCase().includes(query)
			);
		}
		if(c===1){
			
			product.sort((a, b) => parseInt(a.newPrice) - parseInt(b.newPrice));
			
		}else if(c===2){
			product.sort((b,a) => parseInt(a.newPrice, 10) - parseInt(b.newPrice, 10));
			
			
		}
		console.log(product);
		const temp=listOfProduct(product)
		setFilteredItems(temp);
	}

	

	return (
		<div className="flex flex-col bg-slate-100 ">
			<Nav handleSearch={handleClick} cartCount={cartCount} />

			{filteredItems.length === 0 ? (
				<ProductEmpty/>
			) : (
				<>
				<MobileNav sortProduct={sortProduct} />
				<div className="flex mt-7 md:pt-6">
					<Category handleChange={handleClick} />
					<Product res={filteredItems} />
				</div>
				</>
			)}
		</div>
	);
}
export default ProductHome;
