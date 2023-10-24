import React from "react";
import redshoe from "./ShoesImg/Gallery/nike-air-max-red.png";
import blueshoe from "./ShoesImg/Gallery/nik-air-max-blue.png";
import yellowshoe from "./ShoesImg/Gallery/Nike-Air-force-yellow.png";
import whiteshoe from "./ShoesImg/Gallery/Nike-dunk-skate-white.png";

function Shoes(props) {
	function handle(){
		props.handleCart(props.name, props.src, props.price);
	}
	return (
		<div className={" border-2 w-64 h-44  basis-1/3 m-6 rounded-xl md:basis-1/5 md:h-72   " + props.bg}>
			<img className={"relative  w-60 -top-7 right-0 -rotate-45"} src={props.src} alt="My img" />
			<p className="mt-3 md:mt-12 text-center text-sm md:text-xl font-mono">{props.name}</p>
			<p className={"text-center text-sm md:text-xl font-bold " + props.text}>$ {props.price}</p>
			<button onClick={handle} className={"text-white mt-1 text-sm font-mono w-12 rounded-lg md:w-20 md:h-6 md:mt-2 "+props.cart}>Add</button>
		</div>
	);
}

export default function ShoeList(props) {
	console.log(props);
	return (
		<div className="flex flex-row flex-wrap justify-center w-full mt-10 ">
			<Shoes
				handleCart={props.handleCart}
				bg={"bg-rose-300"}
				text={"text-rose-800"}
				src={redshoe}
				name={"Nike Air Max Red"}
				price={"150"}
				cart={"bg-rose-500"}
			/>
			<Shoes
				handleCart={props.handleCart}
				bg={"bg-gray-200"}
				text={"text-gray-700"}
				src={whiteshoe}
				name={"Nike Dunk Skate White"}
				price={"160"}
				cart={"bg-gray-500"}
			/>
			<Shoes
				handleCart={props.handleCart}
				bg={"bg-blue-300"}
				text={"text-blue-800"}
				src={blueshoe}
				name={"Nike Air Max Red"}
				price={"150"}
				cart={"bg-blue-600"}
			/>
			<Shoes
				
				bg={"bg-yellow-300"}
				cart={"bg-yellow-500"}
				text={"text-yellow-700"}
				src={yellowshoe}
				name={"Nike Air Force Yellow"}
				price={"150"}
				handleCart={props.handleCart}
			/>
		</div>
	);
}
