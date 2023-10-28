import React from 'react'

export default function Footer() {
  return (
		<div className="flex flex-row   border-t-2 pt-8">
			<div className=" basis-1/2 flex flex-col pl-2">
				<p>Cool Shop</p>
				<p className='text-s md:text-base'>
					Discover your perfect pair at our shoe haven. Unparalleled comfort, iconic styles, and unbeatable prices
					- find your fashion-forward footwear to step into confidence.
				</p>
				<p> 🍎 🍎 🍎 🍎 🍎 🍎</p>
			</div>
			<div className="flex flex-row basis-1/2 pl-1 md:px-10 justify-between w-100">
				<div className=" ">
					<p className="font-mono text-xl font-bold">About</p>
					<p>
						About <br /> blog <br /> carrers
						<br />
						jobs
					</p>
				</div>

				<div className=" ">
					<p className="font-mono text-xl font-bold">Support</p>
					<p>
						About <br /> blog <br /> carrers <br />
						jobs
					</p>
				</div>

				<div className=" ">
					<p className="font-mono text-xl font-bold">FAQ</p>
					<p>
						About <br /> blog <br /> carrers <br />
						jobs
					</p>
				</div>
			</div>
		</div>
  );
}
