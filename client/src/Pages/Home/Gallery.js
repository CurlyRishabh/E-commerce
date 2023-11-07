import React from "react";

export default function Gallery(props) {
	function handle() {
		props.handleCart(props.name, props.src, props.price);
	}
	return (
		<div
			className={
				"flex flex-col justify-between basis-1/2 md:basis-1/3 p-8 border-8 w-52  flex- items-center text-center border-slate-50 " +
				props.bg
			}
		>
			<img className={props.imgClass + " -top-6"} src={props.src} alt="myimg"></img>
			<p className={" relative   text-gray-700" + props.imgClass}>{props.name}</p>
			<p className={" fonts-mono font-bold " + props.Pt}>$ {props.price}</p>
			<button
				onClick={handle}
				className={
					" relative text-white -bottom-3 text-sm font-mono  w-12 rounded-lg md:w-20 md:h-6 hover:bg-slate-200 border-white border-2 " +
					props.butt
				}
			>
				Add
			</button>
		</div>
	);
}
