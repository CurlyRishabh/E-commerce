import React from 'react'

export default function Footer() {
  return (
		<div className="flex flex-row  border-t-2 mt-10 pt-10">
			<div className=" basis-1/2 flex flex-col justify-start">
				<p>Cool Shop</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aliquid ex. Quo, quas voluptatem beatae
					nulla,Quam,sentium dolores voluptatem, illum facere eum aperiam quaerat veniam nihil architecto quo
					doloribus quod reiciendis voluptates ea sed possimus sint deleniti ducimus!
				</p>
				<p> 🍎 🍎 🍎 🍎 🍎 🍎</p>
			</div>
			<div className="flex flex-row basis-1/2 justify-end">
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
