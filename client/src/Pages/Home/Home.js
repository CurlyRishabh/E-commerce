import React from "react";
import Main from './main';
import ShoeList from "./ShoeList";
export default function Home() {
	return (
		<div className="flex flex-col items-center bg-orange-100 p-10 ">
			<div className="border-2 flex h-12 justify-between w-full  fixed top-0 left-0 items-center">
				<div className="p-2 border-2">Cool Shop</div>
				<div className="flex ">
					<div className="p-2 mr-1  border-2">Product</div>
					<div className="p-2 mr-32 border-2">Cart</div>
					<div className="p-2 mr-2 border-2 rounded-md font-mono text-white bg-orange-400">Login/Signup</div>
				</div>
			</div>
			<Main />
			<div className="border-2 mt-10 font-mono text-4xl text-orange-600 font-semibold text-center ">
				Top-selling Products
				<p className="font-thin text-lg  text-gray-800 mx-16 mt-3">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam unde eum odit libero pariatur aliquid
					maxime culpa minima cupiditate assumenda officia ad, tempora repellendus beatae quisquam.
				</p>
			</div>
			<ShoeList />
			<button className=" bg-orange-600 rounded-xl w-32 text-white mt-10">View All</button>
		</div>
	);
}
