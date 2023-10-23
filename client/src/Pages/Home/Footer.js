import React from 'react'

export default function Footer() {
  return (
		<div className="flex flex-row p-6 mt-10 border-t-2">
			<div className=" basis-1/2 flex flex-col mt-10">
				<p>Cool Shop</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aliquid ex. Quo, quas voluptatem beatae
					nulla,Quam,sentium dolores voluptatem, illum facere eum aperiam quaerat veniam nihil architecto quo
					doloribus quod reiciendis voluptates ea sed possimus sint deleniti ducimus!
				</p>
				<p> 🍎 🍎 🍎 🍎 🍎 🍎</p>
			</div>
			<div className="flex flex-row basis-1/2 m-10 p-2">
				<div className="basis-1/4 mx-10">
					<p className="font-mono text-xl font-bold">About</p>
					<p>
						About <br /> blog <br /> carrers
						<br />
						jobs
					</p>
				</div>

				<div className="basis-1/4 mx-10">
					<p className="font-mono text-xl font-bold">Support</p>
					<p>
						About <br /> blog <br /> carrers <br />
						jobs
					</p>
				</div>

				<div className="basis-1/4 mx-10">
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
