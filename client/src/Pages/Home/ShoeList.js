import React from "react";
import redshoe from "./ShoesImg/nike-air-max-red.png";
import blueshoe from "./ShoesImg/nik-air-max-blue.png";
import yellowshoe from "./ShoesImg/Nike-Air-max-yellow.png";


import whiteshoe from "./ShoesImg/Nike-dunk-skate-white.png";

function Shoes(props) {
	return (
		<div className={"border-2 h-60 basis-1/4 mx-4 rounded-xl " + props.bg}>
			{props.src !== yellowshoe ? (
				<>
					<img className={"relative bottom-24 left-10 w-60 -rotate-45"} src={props.src} alt="My img" />
					<p className="relative bottom-16 text-center  font-mono">{props.name}</p>
					<p className={"relative bottom-16 text-center text-xl font-bold " + props.text}>{props.price}</p>
				</>
			) : (
				<>
					<img className={"relative bottom-16 left-20 w-44 -rotate-45"} src={props.src} alt="My img" />
					<p className="text-center font-mono">{props.name}</p>
					<p className="text-center text-xl font-semibold text-yellow-800">{props.price}</p>
				</>
			)}
		</div>
	);
}

export default function ShoeList() {
	return (
		<div className="flex flex-row b-2 mt-28">
			<Shoes bg={"bg-rose-300"} text={"text-rose-800"} src={redshoe} name={"Nike Air Max Red"} price={"$ 150"} />
			<Shoes
				bg={"bg-gray-200"}
				text={"text-gray-700"}
				src={whiteshoe}
				name={"Nike Dunk Skate White"}
				price={"$ 160"}
			/>
			<Shoes bg={"bg-blue-300"} text={"text-blue-800"} src={blueshoe} name={"Nike Air Max Red"} price={"$ 150"} />
			<Shoes bg={"bg-yellow-400"} src={yellowshoe} name={"Nike Air Max Yellow"} price={"$ 150"} />
		</div>
	);
}
