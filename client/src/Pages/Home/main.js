import React from 'react'
import shoe from "./ShoesImg/Gallery/nike-air-max-sneakers.png";

export default function main(props) {
  return (
		<div className="flex flex-row h-40 md:h-96 md:m-6 md:mt-24 mt-20 mx-2  bg-orange-200 rounded-2xl">
			<div className="flex flex-col justify-between my-4 basis-6/12 text-center  rounded-lg ">
				<p className="font-sans text-sm md:text-5xl  font-medium text-zinc-700 ">Nike Air Max</p>
				<p className="font-mono text-sm md:text-4xl   text-orange-700 font-semibold">Sneaker</p>
				<p className="font-thin text-xs md:text-lg md:p-6 text-gray-700 ">
					Indulge in Unmatched Comfort with Our Nike Air Max Collection - Step into Ultimate Style and Comfort.
				</p>
				<span className="flex flex-row justify-evenly pt-2 md:pb-4">
					<p className="font-mono text-sm md:text-4xl text-orange-600 font-semibold ">$180</p>{" "}
					<button
						onClick={() => props.handleCart("Nike Air Max Orange", shoe, "180")}
						className="bg-orange-600 text-xs md:text-xl rounded-xl w-20 md:w-32 text-white"
					>
						Add
					</button>
				</span>
			</div>
			<div className="flex basis:5/12 border-white items-center pl-2 pb-2 md:pb-12">
				<img src={shoe} alt="img" className="-rotate-45 w-36  relative  md:w-96"></img>
			</div>
		</div>
  );
}
