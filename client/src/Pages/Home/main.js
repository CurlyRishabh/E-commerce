import React from 'react'
import shoe from "./ShoesImg/nike-air-max-sneakers.png";

export default function main() {
  return (
		<div className="flex flex-row md:h-96 md:m-6 md:mt-36 mt-20  bg-orange-200 rounded-2xl">
			<div className=" basis-6/12 text-center  rounded-lg">
				<p className="font-sans text-sm md:text-5xl md:mt-16 font-medium text-zinc-700 ">Nike Air Max</p>
				<p className="font-mono text-sm md:text-4xl  md:mt-4 text-orange-700 font-semibold">Sneaker</p>
				<p className="font-thin text-xs md:text-lg md:p-6 ">
					Lorem ipsum dolor sit amet consectetur adi elit. Neque, perspiciatis quia quibusdam quidem voluptatibus
					eligend. Lorem ipsum dolor sit amet consectetur adipisicing.
				</p>
				<span className="flex flex-row justify-evenly">
					<p className="font-mono text-sm md:text-4xl text-orange-600 font-semibold">$180</p>{" "}
					<button className="bg-orange-600 text-xs rounded-xl w-20 md:w-32 text-white">Add</button>
				</span>
			</div>
			<div className="flex basis:5/12 border-white items-center justify-center">
				<img src={shoe} className="-rotate-45 w-52 relative  md:w-96"></img>
			</div>
		</div>
  );
}
