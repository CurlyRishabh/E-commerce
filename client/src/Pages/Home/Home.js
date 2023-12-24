import React, {useState, useEffect} from "react";

import Main from './main';
import ShoeList from "./ShoeList";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Cookies from "js-cookie";
import Added from "../Cart/Added";

//shoesImport
import grayshoe from "./ShoesImg/Gallery/reebok-skate-sneaker.png";
import redshoe from "./ShoesImg/Gallery/nike-air-max-red.png";
import skyshoe from "./ShoesImg/Gallery/snaeker-puma.png";
import greenshoe from "./ShoesImg/Gallery/skate-puma.png";
import whiteshoe from "./ShoesImg/Gallery/Nike-dunk-skate-white.png";
import mainshoe from "./ShoesImg/Gallery/nike-air-max-sneakers.png";

//logo
import {AiOutlineUserAdd} from "react-icons/ai";
import shop from "./ShoesImg/SHOP.png";
import cartIcon from "./ShoesImg/cart.png"

//links
import {Link} from "react-router-dom";

export default function Home() {

const [cart, setCart] = useState([]);
const [cartCount, setCartCount] = useState(0);
const [show, setShow] = useState(false);
	useEffect(() => {
		const cookieValue = Cookies.get("productList");
		if (cookieValue) {
			const parsedData = JSON.parse(cookieValue);
			let c = 0;
			for (let i = 0; i < parsedData.length; i++) {
				c += parsedData[i].qty;
			}
			setCartCount(c);
			setCart(parsedData);
			
		}
			
			
	}, []);



	function handleCartClick(x) {
		
		
		const check=cart.findIndex(pr => pr.title === x.title); 
		let temp=cart;
		
		if(check !== -1){
			temp[check].qty++;
		}else{
			 temp = [...cart, x];
		}

		

		setCartCount((prev)=> prev+1);
		setCart(temp);
		
		Cookies.set("productList", JSON.stringify(temp), {expires: 1});
		console.log(temp);
		
	}
	function handleCart(name,pic, cost) {
		
		

		//for added to cart display
		setShow((prev) => !prev);
		setTimeout(() => {
			setShow((prev) => !prev);
		}, 2500);


		const item = {
			title: name,
			img: pic,
			newPrice: cost,
			"qty": 1
		};
		console.log(item);
		handleCartClick(item);
	}


	return (
		<>
			{show ? <Added /> : <></>}

			<div className="flex flex-col items-center text-center bg-slate-50  w-full ">
				<div className="z-10   flex flex-row h-10 md:h-16 justify-between w-full  fixed top-0 left-0 items-center bg-slate-200 border-b-4 border-blue-100">
					<Link to="/home">
						<div className="p-2 text-xl md:text-3xl font-semibold text-rose-600 border-2">
							Cool <span className="text-rose-700"> Shop</span>
						</div>
					</Link>
					<div className="flex justify-around w-2/6 md:w-1/6">
						<Link to="/products" className="w-7 h-7">
							<img src={shop} alt="Shop" className="w-6  hover:w-7 " />
						</Link>
						<Link className="flex w-8 h-8" to="/cart">
							<img src={cartIcon} alt="Shop" className="w-6 h-6 hover:w-7 hover:h-7" />

							{cartCount > 0 ? (
								<p className="relative bottom-2 text-red-600  font-semibold ">{cartCount}</p>
							) : (
								<></>
							)}
						</Link>
						<Link to="/profile">
							<AiOutlineUserAdd className="w-6 h-6" />
						</Link>
					</div>
				</div>
				<Main handleCart={handleCart} />

				<p className="mt-10 font-mono text-4xl text-orange-600 font-semibold">Top-selling Shoes</p>
				<p className="font-thin text-xs md:text-lg  text-gray-800 mx-4 md:mx-10	 mt-3">
					Discover Unbeatable Styles: Our Top Selling Shoes Showcasing Trendsetting Designs and Unmatched Comfort,
					Perfect for Every Step You Take.
				</p>

				<ShoeList handleCart={handleCart} />
				<Link to="/products">
					<button className=" bg-orange-600 hover:bg-orange-700 border-white border-2 rounded-2xl w-40 h-10 text-white mt-10">
						View All
					</button>
				</Link>
				<p className=" mt-10 font-mono text-4xl text-orange-600 font-semibold ">Our favorite collections</p>
				<p className="font-thin text-lg  text-gray-800 mx-10 mt-3 mb-4">
					Handpicked Elegance: Unveil Our Favorite Collection, Curated with Exclusive Styles and Unparalleled
					Comfort for the Perfect Fit and Style Statement.
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
						price={"180"}
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
						price={"160"}
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
		</>
	);
}
