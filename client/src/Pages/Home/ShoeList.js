import React from "react";
import redshoe from "./ShoesImg/Gallery/nike-air-max-red.png";
import blueshoe from "./ShoesImg/Gallery/nik-air-max-blue.png";
import yellowshoe from "./ShoesImg/Gallery/Nike-Air-force-yellow.png";
import whiteshoe from "./ShoesImg/Gallery/Nike-dunk-skate-white.png";

function Shoes(props) {
	return (
		<div className={" border-2 w-60 h-40  basis-1/3 m-6 rounded-xl md:basis-1/5 md:h-72   " + props.bg}>
			<img className={"relative  w-60 -top-7 right-0 -rotate-45"} src={props.src} alt="My img" />
			<p className="mt-3 md:mt-12 text-center text-sm md:text-xl font-mono">{props.name}</p>
			<p className={"text-center text-sm md:text-xl font-bold " + props.text}>{props.price}</p>
		</div>
	);
}

export default function ShoeList() {
	return (
		<div className="flex flex-row flex-wrap justify-center w-full mt-10 ">
			<Shoes bg={"bg-rose-300"} text={"text-rose-800"} src={redshoe} name={"Nike Air Max Red"} price={"$ 150"} />
			<Shoes
				bg={"bg-gray-200"}
				text={"text-gray-700"}
				src={whiteshoe}
				name={"Nike Dunk Skate White"}
				price={"$ 160"}
			/>
			<Shoes bg={"bg-blue-300"} text={"text-blue-800"} src={blueshoe} name={"Nike Air Max Red"} price={"$ 150"} />
			<Shoes bg={"bg-yellow-300"} text={"text-yellow-700"} src={yellowshoe} name={"Nike Air Force Yellow"} price={"$ 150"} />
		</div>
	);
}
