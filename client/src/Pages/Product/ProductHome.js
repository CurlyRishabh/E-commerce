import Nav from "./Navigation/Nav";
import data from "../../Database/data";
import Card from "./components/Card";
import Product from "./product/product";
import React, {useState, useEffect} from "react";
import Category from "./Sidebar/Category";
import Cookies from "js-cookie";
import MobileNav from "./Navigation/MobileNav";
import ProductEmpty from "./product/ProductEmpty";

function ProductHome() {
	const [query, setQuery] = useState("");

	const [cartCount, setCartCount] = useState(0);
	const [filteredItems, setFilteredItems] = useState([]);

	useEffect(() => {
		const cookieValue = Cookies.get("productList");
		if (cookieValue) {
			const parsedData = JSON.parse(cookieValue);
			let c = 0;
			for (let i = 0; i < parsedData.length; i++) {
				c += parsedData[i].qty;
			}
			setCartCount(c);
		}
		
		const h = listOfProduct(data);
		setFilteredItems(h);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	
	function handleCartCount(){
		setCartCount((prev)=> prev+1)
	}	

	function handleClick(x) {
		console.log(x.target.value);
		const temp = filterProduct(x.target.value.toLowerCase());
		console.log(temp);
		setFilteredItems(temp);
		setQuery(x.target.value.toLowerCase());
	}

	function listOfProduct(shoes) {
		return shoes.map((x) => (
			<Card
				// key={x.title}
				title={x.title}
				img={x.img}
				star={x.star}
				newPrice={x.newPrice}
				prevPrice={x.prevPrice}
				reviews={x.reviews}
				company={x.company}
				category={x.category}
				handleCartCount={handleCartCount}
			/>
		));
	}

	function filterProduct(fil) {
		let product = data;
		if (fil) {
			product = product.filter(
				(x) => x.category === fil || x.color === fil || x.title.toLowerCase().includes(fil)
			);
		}
		return listOfProduct(product);
	}

	function sortProduct(c) {
		let product = data;
		if (query) {
			product = product.filter(
				(x) => x.category === query || x.color === query || x.title.toLowerCase().includes(query)
			);
		}
		if (c === 1) {
			product.sort((a, b) => parseInt(a.newPrice) - parseInt(b.newPrice));
		} else if (c === 2) {
			product.sort((b, a) => parseInt(a.newPrice, 10) - parseInt(b.newPrice, 10));
		}
		console.log(product);
		const temp = listOfProduct(product);
		setFilteredItems(temp);
	}

	return (
		<div className="flex flex-col bg-slate-100 ">
			<Nav handleSearch={handleClick} cartCount={cartCount} />

			{filteredItems.length === 0 ? (
				<ProductEmpty />
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
