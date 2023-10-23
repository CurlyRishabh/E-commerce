import React from 'react'
import shoe from "./ShoesImg/nike-air-max-sneakers.png";

export default function main() {
  return (
		<div className="flex flex-row h-240px mt-20  bg-orange-200 rounded-2xl">
			<div className="   text-center  basis-2/5 rounded-lg">
				<p className="font-sans text-5xl mt-16 font-medium text-zinc-700 ">Nike Air Max</p>
				<p className="font-mono text-4xl mt-4 text-orange-700 font-semibold">Sneaker</p>
				<p className="font-thin text-lg p-6 mt-10">
					Lorem ipsum dolor sit amet consectetur adi elit. Neque, perspiciatis quia quibusdam quidem voluptatibus
					eligendi ipsum quae minima rem iusto. Lorem ipsum dolor sit amet consectetur adipisicing.
				</p>
				<span className="flex flex-row justify-evenly m-8">
					<p className="font-mono text-4xl text-orange-600 font-semibold">$180</p>{" "}
					<button className="bg-orange-600 rounded-xl w-32 text-white">Add to Cart</button>
				</span>
			</div>
			<div className="flex basis-3/5 border-white items-center">
				<img src={shoe} className="-rotate-45 w-9/12 ml-20"></img>
			</div>
		</div>
  );
}
