import React from "react";
import Main from './main';
import ShoeList from "./ShoeList";
import Gallery from "./Gallery";

//shoesImport
import grayshoe from "./ShoesImg/Gallery/reebok-skate-sneaker.png";
import redshoe from "./ShoesImg/nike-air-max-red.png";
import skyshoe from "./ShoesImg/Gallery/snaeker-puma.png";
import greenshoe from "./ShoesImg/Gallery/skate-puma.png";
import whiteshoe from "./ShoesImg/Nike-dunk-skate-white.png";
import mainshoe from "./ShoesImg/nike-air-max-sneakers.png";



export default function Home() {
	return (
		<div className="flex flex-col items-center bg-slate-50 p-10 ">
			<div className="border-2 flex h-12 justify-between w-full  fixed top-0 left-0 items-center">
				<div className="p-2 border-2">Cool Shop</div>
				<div className="flex ">
					<div className="p-2 mr-1  border-2">Product</div>
					<div className="p-2 mr-32 border-2">Cart</div>
					<div className="p-2 mr-2 border-2 rounded-md font-mono text-white bg-orange-400">Login/Signup</div>
				</div>
			</div>
			<Main />

		<p className="mt-10 font-mono text-4xl text-orange-600 font-semibold">Top-selling Shoes</p>
				<p className="font-thin text-xl  text-gray-800 mx-16 mt-3">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam unde eum odit libero pariatur aliquid
					maxime culpa minima cupiditate assumenda officia ad, tempora repellendus beatae quisquam.
				</p>

			<ShoeList />
			<button className=" bg-orange-600 rounded-2xl w-40 h-10 text-white mt-10">View All</button>

			<p className=" mt-10 font-mono text-4xl text-orange-600 font-semibold ">Our favorite collections</p>
			<p className="font-thin text-lg  text-gray-800 mx-16 mt-3 mb-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit culpa ex pariatur alias, veniam
				minima iste voluptates possimus dicta?
			</p>
			<div className="flex flex-wrap h-full">
				<Gallery bg={"bg-green-100"} src={greenshoe} imgClass={"relative top-6"} name={"Puma Skate UBIQ Green"} />
				<Gallery bg={"bg-orange-200"} src={mainshoe} imgClass={"relative top-6"} name={"Nike Air Max Orange"} />
				<Gallery bg={"bg-blue-200"} src={skyshoe} imgClass={"relative top-6"} name={"Reebok Sneaker Skyblue"} />
				<Gallery bg={"bg-gray-200"} src={grayshoe} imgClass={"relative -top-20"} name={"Reebok GL-6000"} />
				<Gallery bg={"bg-rose-300"} src={redshoe} imgClass={"relative -top-20"} name={"Nike Air Max Red"} />
				<Gallery bg={"bg-zinc-300"} src={whiteshoe} imgClass={"relative -top-20"} name={"Nike Dunk Skate White"} />
			</div>
			<div>ekjbfkejfkj</div>
		</div>
	);
}
