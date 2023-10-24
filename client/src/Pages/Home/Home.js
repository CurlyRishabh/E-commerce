import React, {useState, useEffect} from "react";

import Main from './main';
import ShoeList from "./ShoeList";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Cookies from "js-cookie";

//shoesImport
import grayshoe from "./ShoesImg/Gallery/reebok-skate-sneaker.png";
import redshoe from "./ShoesImg/Gallery/nike-air-max-red.png";
import skyshoe from "./ShoesImg/Gallery/snaeker-puma.png";
import greenshoe from "./ShoesImg/Gallery/skate-puma.png";
import whiteshoe from "./ShoesImg/Gallery/Nike-dunk-skate-white.png";
import mainshoe from "./ShoesImg/Gallery/nike-air-max-sneakers.png";

//logo
import {AiOutlineShoppingCart} from "react-icons/ai";

//links
import {Link} from "react-router-dom";

export default function Home() {

const [cart, setCart] = useState([]);
	useEffect(() => {
		const cookieValue = Cookies.get("productList");
		if (cookieValue) {
			const parsedData = JSON.parse(cookieValue);

			setCart(parsedData);
		}
	}, []);



	function handleCartClick(x) {
		console.log(x);
		Cookies.set("productList", JSON.stringify([...cart, x]), {expires: 1});
		setCart([...cart, x]);
	}
	function handleCart(name,pic, cost) {
		
		const item = {
			title: name,
			img: pic,
			newPrice: cost,
		};
		console.log(item);
		handleCartClick(item);
	}


	return (
		<div className="flex flex-col items-center text-center bg-slate-50  w-full ">
			<div className="z-10   flex flex-row h-10 md:h-16 justify-between w-full  fixed top-0 left-0 items-center bg-slate-200 border-b-4 border-blue-100">
				<Link to="/home">
					<div className="p-2 border-2">Cool Shop</div>
				</Link>
				<div className="flex">
					<Link to="/products">
						<div className="p-2 font-semibold text-xl text-gray-700">Shop</div>
					</Link>
					<Link to="/cart">
						<AiOutlineShoppingCart className="  w-7 h-7    mt-2 md:mr-10 md:ml-6 text-orange-400" />
					</Link>
					<button className=" h-8 md:h-10 md:mr-10 md:w-20 md:text-lg rounded-md font-mono text-white text-xs bg-orange-400">
						Login
					</button>
				</div>
			</div>
			<Main handleCart={handleCart} />

			<p className="mt-10 font-mono text-4xl text-orange-600 font-semibold">Top-selling Shoes</p>
			<p className="font-thin text-xl  text-gray-800 mx-16 mt-3">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam unde eum odit libero pariatur aliquid maxime
				culpa minima cupiditate assumenda officia ad, tempora repellendus beatae quisquam.
			</p>

			<ShoeList handleCart={handleCart} />
			<Link to="/products">
				<button className=" bg-orange-600 rounded-2xl w-40 h-10 text-white mt-10">View All</button>
			</Link>
			<p className=" mt-10 font-mono text-4xl text-orange-600 font-semibold ">Our favorite collections</p>
			<p className="font-thin text-lg  text-gray-800 mx-16 mt-3 mb-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit culpa ex pariatur alias, veniam
				minima iste voluptates possimus dicta?
			</p>
			<div className="flex flex-wrap">
				<Gallery
					handleCart={handleCart}
					price={"150"}
					Pt={"text-green-400"}
					butt={"bg-green-400"}
					bg={"bg-green-100"}
					src={greenshoe}
					imgClass={"relative"}
					name={"Puma Skate UBIQ Green"}
				/>
				<Gallery
					handleCart={handleCart}
					price={"150"}
					Pt={"text-orange-400"}
					butt={"bg-orange-400"}
					bg={"bg-orange-200"}
					src={mainshoe}
					imgClass={"relative"}
					name={"Nike Air Max Orange"}
				/>
				<Gallery
					handleCart={handleCart}
					price={"150"}
					Pt={"text-blue-400"}
					butt={"bg-blue-400"}
					bg={"bg-blue-200"}
					src={skyshoe}
					imgClass={"relative"}
					name={"Reebok Sneaker Skyblue"}
				/>
				<Gallery
					handleCart={handleCart}
					price={"150"}
					Pt={"text-gray-400"}
					butt={"bg-gray-400"}
					bg={"bg-gray-200"}
					src={grayshoe}
					imgClass={"relative"}
					name={"Reebok GL-6000"}
				/>
				<Gallery
					handleCart={handleCart}
					price={"150"}
					Pt={"text-rose-500"}
					butt={"bg-rose-500"}
					bg={"bg-rose-300"}
					src={redshoe}
					imgClass={"relative"}
					name={"Nike Air Max Red"}
				/>
				<Gallery
					handleCart={handleCart}
					price={"150"}
					Pt={"text-zinc-400"}
					butt={"bg-zinc-400"}
					bg={"bg-zinc-300"}
					src={whiteshoe}
					imgClass={"relative"}
					name={"Nike Dunk Skate White"}
				/>
			</div>
			<Testimonials />
		</div>
	);
}
